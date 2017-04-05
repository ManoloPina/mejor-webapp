import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html'
})
export class NotificationComponent {
  
  status: String = 'info';
  title: String;
  message: String;
  hidden: Boolean = true
  
  constructor() {
  }

  public add(status: String, title: String, message) {
    this.status = status;
    this.title = title;
    this.message = message;
    this.hidden = false;
  }
}