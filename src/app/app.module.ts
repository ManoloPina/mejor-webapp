import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { AuthenticationComponent } from '../app/authentication/authentication.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes = [
  {path: 'authentication', component: AuthenticationComponent},
  {path: 'app-component', component: AppComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthenticationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
