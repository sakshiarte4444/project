import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

//declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginform !: FormGroup
  
  constructor(private http:HttpClient, private route:Router, private frombuilder: FormBuilder){}

  ngOnInit():void{
    this.loginform = this.frombuilder.group({
      specifyuser:[''],
      email: [''],
      password: ['']
    })

  }

  logindata(login:FormGroup){
    //console.log(this.loginform.value);
    this.http.get<any>("http://localhost:3000/signUsers")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginform.value.email && a.password === this.loginform.value.password
      });
      if(user){
        alert("Login Successful!!!");
        this.loginform.reset();
        this.route.navigate(['dashboard'])
      }else{
        alert("user not found");
      }
    },err=>{
      alert("Something went wrong")
    })
    
  }

  /*sbtn1(){
    $('.form-box').css('display','none');
    $('.form-box').css('display','block');
  }*/

}
