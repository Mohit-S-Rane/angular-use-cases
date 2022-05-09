import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { LoginComponent } from './container/login/login.component';
import { OnBoardingIntroComponent } from './container/on-boarding/intro/on-boarding-intro.component';
import { OnBoardingComponent } from './container/on-boarding/on-boarding.component';
import { SignupComponent } from './container/signup/signup.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AnonGuard } from './guards/anon.guard';
import { AuthGuard } from './guards/auth-guard';
import { OnBoardingComplete } from './guards/on-boarding-complete';
import { OnBoardingInComplete } from './guards/on-boarding-in-complete';
import { VerificationCompleted } from './guards/verification-completed';
import { VerificationInComplete } from './guards/verification-in-complete';


const routes: Routes = [{path: '', canActivate: [AnonGuard], 
                                   children: [{path: 'signup', component: SignupComponent},
                                              {path: 'forgot-password', component: ForgotPasswordComponent},
                                              {path: '', component: LoginComponent}]},
                        {path: '', canActivate: [AuthGuard, VerificationInComplete], 
                                   children: [{path: 'verify', component: VerificationComponent}]},

                        {path: '', canActivate: [AuthGuard, VerificationCompleted, OnBoardingInComplete],
                                   children: [{path: 'on-boarding', component: OnBoardingIntroComponent},
                                              {path: 'on-boarding/add', component: OnBoardingComponent}]},
                                              
                        {path: '', canActivate: [AuthGuard, VerificationCompleted, OnBoardingComplete],
                                   children: [{path: 'dashboard', component: DashboardComponent}] }                     
                       ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
