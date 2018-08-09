import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Settings } from '../../settings'
import { map } from '../../../node_modules/rxjs/operators';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authenticated: any = null
  
  user: any = {status: 0, token: null}

constructor(private http: HttpClient, private settings: Settings) { }

  login(username: string, pass: string) {
    return this.http.post(this.settings.API.END_POINT.AUTH , {username: username, password: pass})
      .pipe(
        map(user => {
          
          let isAuth = false
          this.user = user

          if (this.user.status && this.user.token) {
            localStorage.setItem('currentUser', JSON.stringify(user))
            isAuth = true
          }
          
          return isAuth
        })
      )
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser')
    localStorage.clear()
  }

  get currentUser(): any {
    let currentUser = JSON.parse(atob(JSON.parse(localStorage.getItem('currentUser')).token))[0]
    currentUser.password = ""
    return currentUser
  }

  get isLoggedIn(): any {
    return this.authenticated
  }

}
