
import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Auth } from "../auth.service";

@Injectable()
export class AssinatureService {

  constructor(private http: Http, private auth: Auth) {
    
  } 

  updateAssinature(assinature: String): Promise<any> {
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(`${Constants.API_URL}/users/update/assinature`, {
      token: this.auth.token,
      userId: this.auth.token,
      assinatur: assinature
    }, options)
    .toPromise()
    .then(response => {
      Promise.resolve(response);
    })
    .catch(err => {
      Promise.reject(err);
    });

  }
 
}