
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
    
    this.http.post(`${Constants.API_URL}/users/create`, {
      email: email, 
      password: password
    }, options)
    .toPromise()
    .then(response => {
      console.log('json', response.json());
      return Promise.resolve(response.json());
    })
    .catch(err => {
      console.log('erro ao cadastrar o usuário', err);
      return Promise.reject(err);
    });

    return Promise.resolve();
  }
 
}