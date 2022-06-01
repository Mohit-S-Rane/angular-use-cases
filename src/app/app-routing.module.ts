import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './container/layout/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './container/forgot-password/forgot-password.component';
import { LoginComponent } from './container/login/login.component';
import { OnBoardingIntroComponent } from './container/on-boarding/intro/on-boarding-intro.component';
import { OnBoardingComponent } from './container/on-boarding/on-boarding/on-boarding.component';
import { SignupComponent } from './container/signup/signup.component';
import { VerificationComponent } from './container/verification/verification.component';
import { AnonGuard } from './guards/anon.guard';
import { AuthGuard } from './guards/auth-guard';
import { OnBoardingComplete } from './guards/on-boarding-complete';
import { OnBoardingInComplete } from './guards/on-boarding-in-complete';
import { VerificationCompleted } from './guards/verification-completed';
import { VerificationInComplete } from './guards/verification-in-complete';
import { ResumeComponent } from './container/dashboard/resume/resume.component';
import { SettingComponent } from './container/dashboard/setting/setting.component';
import { LogoutComponent } from './component/logout/logout.component';
import { NotFoundComponent } from './container/not-found/not-found.component';
import { TemplatesComponent } from './container/templates/templates.component';
import { SingleTemplateComponent } from './container/single-template/single-template.component';
import { SingleResumeComponent } from './container/single-resume/single-resume.component';
import { ResumeFormComponent } from './container/resume-form/resume-form.component';
import { UploadComponent } from './container/tabs/upload/upload.component';


const routes: Routes = [{path: '', canActivate: [AnonGuard], 
                                   children: [{path: 'signup', component: SignupComponent},
                                              {path: 'forgot-password', component: ForgotPasswordComponent},
                                              {path: '', component: LoginComponent}]},
                        {path: '', canActivate: [AuthGuard, VerificationInComplete], 
                                   children: [{path: 'verify', component: VerificationComponent}]},

                        {path: '', canActivate: [AuthGuard, VerificationCompleted, OnBoardingInComplete],
                                   children: [{path: 'on-boarding', component: OnBoardingIntroComponent},
                                              {path: 'on-boarding/add', component: OnBoardingComponent}]},
                        
                        {path: 'resume/view/:id', component: SingleResumeComponent},                      
                                              
                        {path: '', canActivate: [AuthGuard, VerificationCompleted, OnBoardingComplete],
                                   children: [{path: 'dashboard', component: DashboardComponent, 
                                      children: [{path: 'resume', component: ResumeComponent},
                                                 {path: 'settings', component: SettingComponent},
                                                 {path: 'resume/template/:id', component: TemplatesComponent},
                                                 {path: 'resume/template/:id/:templateId', component: SingleTemplateComponent},
                                                 {path: 'resume/preview/:id', component: SingleResumeComponent},
                                                 {path: 'resume/edit/:id', component: ResumeFormComponent}, 
                                                 {path: 'resume/edit/profile/:id', component: UploadComponent}, 
                                                                                              
                                                ]}]},

                        {path: 'logout', component: LogoutComponent},

                        {path: '**', component: NotFoundComponent}

                       ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
