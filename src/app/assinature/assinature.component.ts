import { Component } from '@angular/core';
import { Auth } from "../auth.service";

@Component({
  selector: 'assinature',
  templateUrl: './assinature.template.html'
})

export class AssinatureComponent {
  
  constructor(private auth: Auth) {
    
  }
  
}