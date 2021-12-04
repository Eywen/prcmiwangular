import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoginService {

  /*public logIn:boolean= false;
  public logOut:boolean= false;*/

  /*constructor() {
    if ("true" == localStorage.getItem("login")){
      this.logIn = true;
    }else{
      this.logOut = true;
    }
  };*/

  private _showLogin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  get showLogin$(): Observable<boolean> {
    console.log("islogin value: "+this._showLogin$.getValue())
    return this._showLogin$.asObservable();
  }

  public startShowLogin(): void {
    this._showLogin$.next(true);
    //console.log("starlogin: " + this._isLogin$);
    console.log("starlogin value: "+this._showLogin$.getValue())
  }

  public stopShowLogin(): void {
    this._showLogin$.next(false);
  }

  logout() {
    sessionStorage.removeItem("token");
  }

  isLoggedIn() {
    if (sessionStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(<string>sessionStorage.getItem('token'));
    return currentUser.token;
  }

}
