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

  userProfile: Object;
  token: String;

  constructor(
    private router: Router,
    private http: Http) {
    // Add callback for lock `authenticated` event

    this.userProfile = JSON.parse(localStorage.getItem('profile'));

  }

  public login(email:String, password: String) {
    // Call the show method to display the widget.
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
  
    this.http.post(`${Constants.API_URL}/login`, 
    JSON.stringify({ 
      email: email, password: password 
    }), options)
    .toPromise()
    .then(response => {
      this.token = response.json().token;
      localStorage.setItem('token', `${this.token}`);
      console.log('authenticated ?', this.authenticated());
    }).catch(err => {
      console.log('err', err);
    });
  }

  public authenticated() : Boolean {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return localStorage.getItem('token') ? true : false;
  }

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = undefined;
    //Came back to home
    this.router.navigateByUrl('');
  }
}