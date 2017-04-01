import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { AuthenticationComponent } from '../app/authentication/authentication.component';
import { RouterModule, Routes } from '@angular/router';
import { Auth } from './auth.service';
import { AssinatureComponent } from './assinature/assinature.component';
import { routing, appRoutingProviders } from './app.routes';
import { AuthGuard } from "./auth.guard";

const appRoutes = [
  {path: 'authentication', component: AuthenticationComponent},
  {path: 'app-component', component: AppComponent},
  {path: 'assinature', component: AssinatureComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent,
    AssinatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [Auth, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
