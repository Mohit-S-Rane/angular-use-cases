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


const routes: Routes = [{path: '', canActivate: [AnonGuard], 
                                   children: [{path: 'signup', component: SignupComponent},
                                              {path: 'forgot-password', component: ForgotPasswordComponent},
                                              {path: '', component: LoginComponent}]},
                        {path: '', canActivate: [AuthGuard], 
                                   children: [{path: 'verify', component: VerificationComponent},
                                              {path: 'on-boarding', component: OnBoardingComponent},
                                              {path: 'dashboard', component: DashboardComponent}, ]}                    ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
