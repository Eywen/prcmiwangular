import {Injectable} from "@angular/core";
import {RegistroI} from '../model/registro.interface'
import {ResponseI} from '../model/response.interface'
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseurl = "http://fenw.etsisi.upm.es:10000"; ///users
  private regurl =  'http://fenw.etsisi.upm.es:10000/users';

  constructor(private http: HttpClient) {
  }

  registerUser(form:RegistroI):Observable<ResponseI>{
    let direccion = this.baseurl + "/users";
    return this.http.post<ResponseI>(direccion,form);
  }
}
