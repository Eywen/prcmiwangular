import { Component } from '@angular/core';
import {LoginService} from "../shared/services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cartas2';
  constructor(public loginService:LoginService) {
  }
}
