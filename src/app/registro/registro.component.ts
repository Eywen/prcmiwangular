import {Component, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Target} from "@angular/compiler";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {

  registroForm = new FormGroup({
    usuario : new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    repeatPassword : new FormControl('',Validators.required)
  });

  errorMsg:any = "";

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('focusout', ['$event.target'])
  onFocusout(target: any) {
    console.log("Focus out called: " + target.usuario);
    //this.validateFormControl.markAsTouched();
  }


  //this.errorMsg = "Error. Credenciales incorrectas ";
}
