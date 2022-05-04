import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';

const routes: Routes = [{path: '', component: LoginComponent}, 
                        {path: 'login', component: LoginComponent}, 
                        {path: 'signup', component: SignupComponent},
                        {path: 'forgot-password', component: ForgotPasswordComponent}
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
