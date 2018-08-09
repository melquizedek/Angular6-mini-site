import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  authenticated: false;

  constructor() {}

  isLoginSuccess(val): void {
    this.authenticated = val;
  }

}
