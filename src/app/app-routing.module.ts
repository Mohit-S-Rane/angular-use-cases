import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { LoginComponent } from './container/login/login.component';
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
                        {path: '', canActivate: [AuthGuard], 
                                   children: [{path: 'verify', component: VerificationComponent, canActivate: [VerificationInComplete]},
                                              {path: 'on-boarding', component: OnBoardingComponent, canActivate: [VerificationCompleted, OnBoardingInComplete]},
                                              {path: 'dashboard', component: DashboardComponent, canActivate: [VerificationCompleted, OnBoardingComplete]}, ]}                    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],


  exports: [RouterModule]
})
export class AppRoutingModule { }
