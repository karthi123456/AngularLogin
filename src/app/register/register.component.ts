import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formdata = {name: "", email: "", password: ""};
  submit = false;
  errorMessage ="";
  loading=false;

  constructor(){
    
  }

  onSubmit(){
    this.loading=true;
    console.log(this.formdata);
    this.loading=false;
  }
}
