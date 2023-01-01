import { Component } from '@angular/core';
import { SignupDataService } from './../services/signup-data.service';

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent {

  signupusers:any;
  constructor(private signupData:SignupDataService)
  {
      this.signupData.signupUsers().subscribe((data)=>{
        this.signupusers=data;
      })
  }
}
