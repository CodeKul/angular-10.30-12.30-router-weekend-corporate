import { AnyWebService } from './base/any-web.service';
import { MyRouterModule } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { FormsModule } from '@angular/forms';
import { BaseComponent } from './base/base.component';
import { ProfileComponent } from './dash/profile.component';
import { LogsComponent } from './dash/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashComponent,
    NavbarComponent,
    ForgetPassComponent,
    BaseComponent,
    ProfileComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    MyRouterModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [AnyWebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
