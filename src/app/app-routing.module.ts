import { NgModule } from '@angular/core';
import {provideRouter, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {AuthGuard} from "./service/auth-guard.guard";


const routes: Routes = [
  // home route protected by auth guard
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
