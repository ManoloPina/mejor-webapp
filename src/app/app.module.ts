import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { HomeComponent } from '../app/home/home.component';
import { ProfileComponent } from '../app/profile/profile.component';
import { AuthenticationComponent } from '../app/authentication/authentication.component';
import { LoginComponent } from '../app/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from './auth.service';
import { AssinatureComponent } from './assinature/assinature.component';
import { routing, appRoutingProviders } from './app.routes';
import { AuthGuard } from "./auth.guard";
import { NotificationComponent } from './notification/notification.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    AssinatureComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Auth, appRoutingProviders, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
