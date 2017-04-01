import { Component } from '@angular/core';
import { Auth } from '../auth.service';

@Component({
  selector: 'login',
  templateUrl: 'app/login.component.html'
})
export class LoginComponent {
  constructor(private auth: Auth) {}
}