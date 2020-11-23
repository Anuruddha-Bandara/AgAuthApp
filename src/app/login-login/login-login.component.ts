import { Component, OnInit } from '@angular/core';  
import { AuthService } from '../_services/auth.service';  
import { Router } from '@angular/router';  
  
@Component({  
  selector: 'app-login',  
  templateUrl: './login-login.component.html',  
  styleUrls: ['./login-login.component.css']  
})  

export class LoginComponent implements OnInit {  
  
  loginData = { username: '', password: ''};  
  constructor(private _authservice: AuthService, private router: Router) {   
    // redirect to paidEvents if already logged in  
    if (this._authservice.currentUserValue) {   
      this.router.navigate(['/paidevents']);  
  }  
}  
  
  ngOnInit(): void {  
  }  
  
  login() {  
    console.log(this.loginData);  
    this._authservice.authenticate(this.loginData).subscribe(  
      data => {  
        console.log("loggedin : ", data );  
        this.router.navigate(['/paidevents'], { queryParams: { }});  
      },  
      error => {  
        console.log("erorr: ", error);  
      }  
    );  
    console.log('Logged in successfully!');  
  }  
}