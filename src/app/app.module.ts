import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http-service';
import { ApiService } from './services/api-service';
import { AlertService } from './services/alert-service';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { ForgotPasswordComponent } from '../app/container/forgot-password/forgot-password.component'
import { ContainerTempComponent } from '../app/container/container-template/container.component'
import { VerificationComponent } from './container/verification/verification.component';
import { AuthGuard } from './guards/auth-guard';
import { AnonGuard } from './guards/anon.guard';
import { OnBoardingComponent } from './container/on-boarding/on-boarding/on-boarding.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { VerificationCompleted } from './guards/verification-completed';
import { VerificationInComplete } from './guards/verification-in-complete';
import { OnBoardingComplete } from './guards/on-boarding-complete';
import { OnBoardingInComplete } from './guards/on-boarding-in-complete';
import { OnBoardingIntroComponent } from "./container/on-boarding/intro/on-boarding-intro.component";
import { ResumeNameComponent } from "./container/on-boarding/resume-name/resume-name.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ContainerTempComponent,
    VerificationComponent,
    OnBoardingComponent,
    DashboardComponent,
    OnBoardingIntroComponent,
    ResumeNameComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [HttpService, ApiService,AlertService, AuthGuard, AnonGuard, VerificationCompleted, VerificationInComplete, OnBoardingComplete, OnBoardingInComplete],
  bootstrap: [AppComponent]
})
export class AppModule { }
