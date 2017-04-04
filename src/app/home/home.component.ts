import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.service';

@Component({
  selector: 'home',
  templateUrl: './home.template.html'
})

export class HomeComponent implements OnInit {
    
  constructor(private auth: Auth) {

  }

  ngOnInit(): void {
  }
}