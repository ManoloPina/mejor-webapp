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
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})

export class LoginComponent {

  email: String = 'contato@manolopina.com.br'; 
  password: String = 'Noir100%';

  constructor(private auth: Auth,
  private http: Http, 
  private loginService: LoginService,
  private router: Router) {
  }

  createAccount(email, password) {
    this.loginService.createAccount(email, password)
    .then(response => {
      new Promise((resolve, reject) => {
        console.log('response', response);
      if(response && response.ok) {
        this.auth.login(email, password);
        resolve();
        console.log('processo 1');
      }
      });
    })
    .then(() => {
      console.log('processo 2');
      this.router.navigateByUrl('/assinature');
    })
    .catch(err => {
      console.error(err.json().errmsg);
    });
  }

}