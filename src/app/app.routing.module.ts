import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './components/login.component';
import { MatNavComponent } from './components/mat-nav.component';
import { MyDashboardComponent } from './components/my-dashboard.component';

// Services
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    { path: '', component: LoginComponent },
    {
      path: 'private', component: MatNavComponent,
      children: [
         { path: 'dashboard', component: MyDashboardComponent }
      ],
      canActivate: [AuthGuard]
    }
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }