import { Injectable } from '@angular/core';
import { Token } from '../model/token';
import{Router} from '@angular/router';
import{HttpClient} from '@angular/common/http'
import{Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router, private http:HttpClient) { }

  canAccess(){
    if(!this.isAuthenticated()){
      this.router.navigate(['/Login']);
    }
  }

  isAuthenticated():boolean{
    if(sessionStorage.getItem("token") !== null){ 
        return true;
    }
    return false;
  }

  accessToken(email:string, passWord:string):Observable<Token>
  {
    return this.http.post<Token>('https://yourapiurl/api/v1/token/access-token', {
      "email": email, "password": passWord
    });
  }
}
