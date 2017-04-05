import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import { Constants } from '../constants';
import { Auth } from '../auth.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
export class ProfileService {

  profile: Object;

  constructor(private http: Http, private auth: Auth) {

  }

  public getProfile()  {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post(`${Constants.API_URL}/login`,
      JSON.stringify({
        token: this.auth.token,
        userId: this.auth.userId
      }), options)
      .toPromise()
      .then(response => {
        console.log('response', response.json());
      }).catch(err => {
        console.log('err', err);
      });
  }
}