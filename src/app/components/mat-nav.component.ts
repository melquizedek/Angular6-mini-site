import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Settings } from '../../settings';

@Component({
  selector: 'app-mat-nav',
  templateUrl: '../templates/mat-nav.component.html',
  styleUrls: ['../stylesheets/navigation/nav.green.scss']
})

export class MatNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  currentUser: any = null

  constructor(private breakpointObserver: BreakpointObserver, 
    private auth: AuthService, 
    private router: Router,
    private settings: Settings) {
      this.currentUser = this.auth.currentUser
    }
  
  ngOnInit(): void {
    
  }

  logout() : void {
    this.auth.logout()
    location.reload(true)
  }

}