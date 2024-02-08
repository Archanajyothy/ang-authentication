import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupformComponent } from './signupform/signupform.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: SignupformComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
