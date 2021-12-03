import {Injectable} from "@angular/core";
import {LoginI} from "../model/login.interface";
import {RegistroI} from '../model/registro.interface'
import {ResponseI} from '../model/response.interface'
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseurl = "http://fenw.etsisi.upm.es:10000"; ///users
  //private regurl =  'http://fenw.etsisi.upm.es:10000/users';


  constructor(private http: HttpClient) {
  }

  loginUser(usuario:string, password:string):Observable<HttpResponse<Object>>{
    let direccion = this.baseurl + "/users/login/?username="+usuario+"&password="+password;
    return this.http.get(direccion,{observe: 'response'});
  }

  registerUser(form:RegistroI):Observable<ResponseI>{
    let direccion = this.baseurl + "/users";
    return this.http.post<ResponseI>(direccion,form);
  }
}
