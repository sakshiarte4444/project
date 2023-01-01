import { SignupDataService } from './../services/signup-data.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
   signupusers:any;
  constructor(private signupData:SignupDataService)
  {
      this.signupData.signupUsers().subscribe((data)=>{
        this.signupusers=data;
      })
  }
}
