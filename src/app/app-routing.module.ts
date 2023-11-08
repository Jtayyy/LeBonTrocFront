import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { layout: 'login' } },
  { path: 'home', component: HomeComponent, data: { layout: 'home' } },
  { path: 'profile', component: ProfileComponent, data: { layout: 'profile' } },

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
