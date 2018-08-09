import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Settings {

  API: any = {
    TYPE: 'INTERNAL'//Set here the type of API to use. Possible value is INTERNAL | EXTERNAL
  }

  IMG: any = {
    DIR: './assets/images'
  }

  constructor() { 

    if (this.API.TYPE === "INTERNAL") {
      this.API = Object.assign(this.API, {HOST: 'http://localhost:3000'})
      this.INTERNAL_API_CONF()
    }

    if (this.API.TYPE === "EXTERNAL") {
      this.API = Object.assign(this.API, {HOST: 'http://localhost:4000'})
      this.EXTERNAL_API_CONF()
    }
    
    this.IMG_CONF()
  }

  //Add All INTERNAL API Here
  private INTERNAL_API_CONF() {
    this.API = Object.assign(this.API, {
      END_POINT: { 
        AUTH: this.API.HOST + '/internal-api/auth',
        POLICIES: this.API.HOST + '/internal-api/policies'
      } 
    })
  }

  //Add All EXTERNAL API Here
  private EXTERNAL_API_CONF() {
    this.API = Object.assign(this.API, {
      END_POINT: { 
        AUTH: this.API.HOST + '/external-api/auth',
        POLICIES: this.API.HOST + '/external-api/policies'
      } 
    })
  }

  //Add image URL here 
  private IMG_CONF() {
    this.IMG = Object.assign(this.IMG, {
      LOGO: this.IMG.DIR + '/logo.png'
    })
  }

}
