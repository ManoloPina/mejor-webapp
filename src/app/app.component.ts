import { Component, Directive, ViewChild, AfterViewInit } from '@angular/core';
import { AuthenticationComponent } from './authentication/authentication.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(AuthenticationComponent) child: AuthenticationComponent
  
  ngAfterViewInit() {
    // child is set
  }

}
