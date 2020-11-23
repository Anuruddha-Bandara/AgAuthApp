import { Component } from '@angular/core';  
import { AuthService } from './_services/auth.service';  
import { Router } from '@angular/router';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent {  
  constructor(private _authservice: AuthService, private router: Router){  
    console.log(_authservice);  
  }  
  
  isLoggedIn(){  
    return this._authservice.currentUserValue;  
  }  
  
  logout()  
  {  
    this._authservice.logout();  
    this.router.navigate(['/login']);  
  }  
  
  title = 'AuthApp';  
}