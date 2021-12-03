import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../shared/services/login.service";

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  constructor(public loginService:LoginService) { }
  showLogin:boolean = true;
  ngOnInit(): void {
    console.log("loginService: "+ this.loginService.showLogin$);


    this.loginService.showLogin$.subscribe(
      (value) => {
        if (value === true) {
          this.showLogin = true;
        }
        else  {
          this.showLogin = false;
        }
      }, // funcion recepción valor
      (anerror) => alert (anerror)
    ) // subscribe
  }
}
