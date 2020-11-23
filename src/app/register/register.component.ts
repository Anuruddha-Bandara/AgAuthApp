import { Component, OnInit } from '@angular/core';  
import { AuthService } from '../_services/auth.service';  
import { User } from '../_model/user';  
import { Router } from '@angular/router';  
import { Subscription } from 'rxjs';  
  
@Component({  
  selector: 'app-register',  
  host: { '[@slideInOutAnimation]': '' },  
  templateUrl: './register.component.html',  
  styleUrls: ['./register.component.css']  
})  
export class RegisterComponent implements OnInit  {  
  
  component: any;  
  subscription: Subscription;  
  registerResult: number = 0;  
  registerUserData = new User();  
  constructor(private _authservice: AuthService, private router: Router) {    
    // redirect to home if already logged in  
      if (this._authservice.currentUserValue) {   
        this.router.navigate(['/paidevents']);  
    }  
  }  
  
  ngOnInit(): void {  
    this.registerUserData.username   
      = this.registerUserData.firstName   
      = this.registerUserData.lastName   
      = this.registerUserData.password   
      = ""  
  }  
  
  Register(user){  
    console.log(user);  
    this._authservice.registerUser(user).subscribe(data=>  
      {  
        console.log("login Details:", data);  
        this.router.navigate(['/login'], { queryParams: { }});  
      },  
      error => {  
        console.log("Error: ", error);  
      },  
      ()=>{  
        console.log("login process complete!");  
      });  
    console.log('Logged in!');  
  }  
}