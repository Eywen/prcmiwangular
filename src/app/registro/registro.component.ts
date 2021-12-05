import {Component, Directive, HostListener, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Target} from "@angular/compiler";
import {ApiService} from "../../shared/services/api.service";

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
  errorStatus:boolean = false;
  existUser:boolean = false;
  errorMsg:any = "";

  constructor() { }

  ngOnInit(): void {
  }
  //this.errorMsg = "Error. Credenciales incorrectas ";
}

@Directive({
  selector: '[validateOnBlur]',
})

export class MyDirective {
  @Input('validateFormControl') validateFormControl:any;

  errorStatus:boolean = false;
  errorMessg:any = "";

  constructor(private api:ApiService, private registro:RegistroComponent) { }
  @HostListener('focus', ['$event.target'])
  onFocus(target:any) {
    //console.log("Focus called");
    this.validateFormControl.markAsUntouched();
    //console.log("this.validateFormControl.touched -> " +this.validateFormControl.touched);
  }
  @HostListener('focusout', ['$event.target'])
  onFocusout(target:any) {
    let usuario = target.value;
    //console.log("Focus out called " + this.validateFormControl.toString());
    this.validateFormControl.markAsTouched();
    console.log("usuario sin foco: " + target.value);
    //TODO: LLAMAR A METODO GET PARA VERIFICAR EL NOMBRE
    this.verifyUserRegister(usuario);
  }

  verifyUserRegister (usuario:string) {
    this.api.verifyUsuarioRegister(usuario).subscribe(data => {
        //this.mytoken= data.headers.get('Authorization');
        //sessionStorage.setItem("token",this.mytoken);
        //localStorage.setItem("login","true");
        //this.loginService.stopShowLogin();
        //this.router.navigate(['inicio']);s
        if (data.status == 200){
          console.log("data",data);
          this.registro.existUser = true;
          this.registro.errorMsg = "El nombre de usuaria ya existe.";
        }

      }, error => {
        this.registro.errorStatus= true;
        this.errorStatus= true;
        this.errorMessg = "Error.  ";
        this.registro.errorMsg = "Error verificando nombre usuario";
        //localStorage.removeItem('login');
        //this.loginService.startShowLogin();
      }
    );
  }
}


