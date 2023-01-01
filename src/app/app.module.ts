import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { ConsultantComponent } from './consultant/consultant.component';
import { ClientComponent } from './client/client.component';



@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AdminComponent,
    ConsultantComponent,
    ClientComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
