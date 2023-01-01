import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


//declare var $:any;
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  public signup !: FormGroup;
  
  constructor(private route:Router ,private http:HttpClient, private frombuilder: FormBuilder){}
  
  signuser:any;
  ngOnInit():void {
    this.signup = this.frombuilder.group({
      specifyuser: [''],
      fname: [''],
      lname: [''],
      email: [''],
      phonenumber: [''],
      password: ['']
    })

  }
  signupdata(signup:FormGroup){
    // console.log(this.signup.value);
    this.http.post<any>("http://localhost:3000/signUsers", this.signup.value)
    .subscribe(res=>{
      alert("SignUp Successful!!!");
      this.signup.reset();
      this.route.navigate(['login']);
    },err=>{
      alert("Something went wrong")
    })
   
  }

  /*sbtn(){
    this._route.navigate(['login']);
    //$('.form-box1').css('z-index','99');
    $('.form-box').css('display','block');
    $('.form-box').css('display','none');
  }*/
}
