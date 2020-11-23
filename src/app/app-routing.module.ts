import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { EventsComponent } from './events/events.component';  
import { LoginComponent } from './login-login/login-login.component';
import { PaidEventsComponent } from './paid-events/paid-events.component';  
import { RegisterComponent } from './register/register.component';  
import { AuthGuard } from './_guards/auth.guard';  
  
const routes: Routes = [  
  {  
    path: '',  
    component: EventsComponent,  
    canActivate: [AuthGuard]  
  },  
  {  
    path: 'events',  
    component: EventsComponent,  
    canActivate: [AuthGuard]  
  },  
  {  
    path: 'paidevents',  
    component: PaidEventsComponent  
  },  
  {  
    path: 'login',  
    component: LoginComponent  
  },  
  {  
    path: 'register',  
    component: RegisterComponent  
  }  
];  
  
@NgModule({  
  imports: [RouterModule.forRoot(routes)],  
  exports: [RouterModule]  
})  
export class AppRoutingModule { } 