import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_service/auth.service';
import { Token } from '../model/token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService){

  }

  formdata = {
    email: "",
    password: ""
  };
  ngOnInit(): void {
    
  }
  submit=false;
  loading=false;
  errorMessage=false;

  onSubmit()
  {
   this.auth
    .accessToken(this.formdata.email, this.formdata.password)
    .subscribe({
      next:data=>{
        
        this.storeToken(data);
        
      }
    });
  }

  storeToken(token:Token)
  {
    sessionStorage.setItem('token',token.response.token);
  }
}
