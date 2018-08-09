import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Routes
import { AppRoutingModule } from './app.routing.module';

// Components
import { LoginComponent } from './components/login.component';
import { MatNavComponent } from './components/mat-nav.component';
import { MyDashboardComponent } from './components/my-dashboard.component';
import { AlertComponent } from './components/alert.component';

// Services
import { AuthService } from './services/auth.service';
import { Settings } from '../settings';
import { AlertService } from './services/alert.service';
import { MaterilModule } from './materil.module';

@NgModule({
  declarations: [
    AppComponent,
    MatNavComponent,
    MyDashboardComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterilModule
  ],
  providers: [Settings, AuthService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
