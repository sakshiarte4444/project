import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private router:Router){}

  goToAdmin(pageName:string):void{
    this.router.navigate(['admin']);
  }

  goToConsultant(pageNme1:string):void{
    this.router.navigate(['consultant']);
  }

  goToClient(pageNme2:string):void{
    this.router.navigate(['client']);
  }



}
