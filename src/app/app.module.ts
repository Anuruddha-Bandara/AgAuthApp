import { BrowserModule } from '@angular/platform-browser';  
import { NgModule } from '@angular/core';  
import { FormsModule } from '@angular/forms';  
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';  
import { RegisterComponent } from './register/register.component';  
import { EventsComponent } from './events/events.component';  
import { PaidEventsComponent } from './paid-events/paid-events.component';  
import { fakeBackendProvider } from './_helpers/fake-backend-intercepter.provider';  
import { JwtInterceptor } from './_helpers/jwt.interceptor';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  
import { LoginComponent } from './login-login/login-login.component';
import { ErrorInterceptor } from './_helpers/error.interceptors';
  
@NgModule({  
  declarations: [  
    AppComponent,  
    RegisterComponent,  
    LoginComponent,  
    EventsComponent,  
    PaidEventsComponent  
  ],  
  imports: [  
    BrowserModule,  
    FormsModule,  
    HttpClientModule,  
    AppRoutingModule,  
    BrowserAnimationsModule
   , NgbModule  
  ],  
  providers: [  
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },  
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },  
    fakeBackendProvider  
  ],  
  bootstrap: [AppComponent]  
})  
export class AppModule { } 