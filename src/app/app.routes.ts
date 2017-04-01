
import { ModuleWithProviders }         from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AssinatureComponent } from "./assinature/assinature.component";

const appRoutes: Routes = [
  { path: 'assinature', component: AssinatureComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

export const appRoutingProviders: any[] = [
  AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);