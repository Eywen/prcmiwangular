import {Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../../shared/services/api.service";
import {LoginI} from "../../shared/model/login.interface";
import {Route, Router} from "@angular/router";
import {ResponseI} from "../../shared/model/response.interface";
import {LoginService} from "../../shared/services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  private mytoken: any;
  errorStatus:boolean = false;
  errorMsg:any = "";

  constructor(private api:ApiService, private router:Router, private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onLogin(usuario: string, password: string){
    console.log(usuario, password);
   this.api.loginUser(usuario,password).subscribe(data => {
      this.mytoken= data.headers.get('Authorization');
      sessionStorage.setItem("token",this.mytoken);
      localStorage.setItem("login","true");
      this.loginService.stopShowLogin();

       /*constructor() {
   if ("true" == localStorage.getItem("login")){
     this.logIn = true;
   }else{
     this.logOut = true;
   }
 };*/

       /*console.log("data" + data);
        console.log("mytoken autoriztion " +this.mytoken)
        console.log("status " +data.status);
        if (data.status == 200){
          localStorage.setItem("token",this.mytoken);
        }*/
        this.router.navigate(['inicio']);

    }, error => {
          this.errorStatus= true;
          this.errorMsg = "Error. Credenciales incorrectas ";
          localStorage.removeItem('login');
          this.loginService.startShowLogin();
        }
    );
  }

  /*
  Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2Mzg0ODAyODMsImV4cCI6MTYzODQ4MDg4M30.l9LOyJAWDQAKMezmX_N1qd3OZ023KFs19RDxL38Rr3c
   */

}
