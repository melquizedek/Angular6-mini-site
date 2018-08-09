import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Settings } from '../../settings';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: '../templates/login.component.html',
  styleUrls: ['../stylesheets/login/login.green.scss']
})

export class LoginComponent implements OnInit {

  model = { 'username': '', 'password': '' }; // TODO: rewrite to class

  constructor(
    private authService: AuthService,
    private router: Router,
    private settings: Settings,
    private alertService: AlertService
  ) {
  }

  ngOnInit() {}

  login() : void {
    this.authService.login(this.model.username, this.model.password)
      .subscribe(isAuth => {
          if (isAuth) this.router.navigate(['/private/dashboard'])
      }, error => {
        this.alertService.error(error.error.message)
      })
  }

}
