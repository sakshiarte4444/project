import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupDataService {

  constructor(private http:HttpClient) { }

  signupUsers()
  {
     return this.http.get("http://localhost:3000/signUsers");
  }
}
