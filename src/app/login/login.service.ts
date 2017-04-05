
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
  
  constructor(private http: Http) {
    
  } 

  createAccount(email: String, password: String): Promise<any> {
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(`${Constants.API_URL}/users/create`, {
      email: email, 
      password: password
    }, options)
    .toPromise()
    .then(response => {
      return Promise.resolve(response);
    })
    .catch(err => {
      return Promise.reject(err);
    });

  }
 
}