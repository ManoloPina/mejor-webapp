import { Component } from '@angular/core';
import { Auth } from '../auth.service';
import { Login } from './login';
import { LoginService } from './login.service';
import { Constants } from '../constants';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  email: String = 'contato@manolopina.com.br'; 
  password: String = 'Noir100%';

  constructor(private auth: Auth,
  private http: Http, 
  private loginService: LoginService) {
  }

  createAccount(email, password) {
    this.loginService.createAccount(email, password)
    .then(result => console.log('result', result));
  }

}