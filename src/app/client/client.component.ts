import { Component } from '@angular/core';
import { SignupDataService } from './../services/signup-data.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent {
  signupusers:any;
  constructor(private signupData:SignupDataService)
  {
      this.signupData.signupUsers().subscribe((data)=>{
        this.signupusers=data;
      })
  }

}
