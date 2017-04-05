import { Injectable, OnInit, Component } from '@angular/core';
import { Router } from "@angular/router";
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Constants } from './constants';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {

  token: String;
  userId: String;

  constructor(
    private router: Router,
    private http: Http) {
  }

  public login(email:String, password: String): Promise<any> {
    // Call the show method to display the widget.
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    return this.http.post(`${Constants.API_URL}/login`, 
    JSON.stringify({ 
      email: email, password: password 
    }), options)
    .toPromise()
    .then(response => {
      this.token = response.json().token;
      this.userId = response.json().userId;
      sessionStorage.setItem('token', `${this.token}`);
      sessionStorage.setItem('userId', `${this.userId}`);
      Promise.resolve(response);
    }).catch(err => {
      console.log('err', err);
      Promise.reject(err);
    });
  }

  public authenticated() : Boolean {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return sessionStorage.getItem('token') ? true : false;
  }

  public logout() {
    // Remove token from localStorage
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
    //Came back to home
    this.router.navigateByUrl('');
  }
}