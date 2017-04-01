import { Component, Directive, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Auth } from './auth.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  constructor(private auth: Auth, private route: Router) {

  }

  ngOnInit(): void {
  
  }

}
