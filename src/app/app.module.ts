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
import { UploadComponent } from "./container/tabs/upload/upload.component";
import { UploadImageComponent } from "./container/tabs/upload-image/upload-image.component";
import { UploadFromDiskComponent } from "./container/tabs/upload-from-disk/upload-from-disk";
import { ImportFromYoutubeComponent } from "./container/tabs/import-from-youtube/import-from-youtube.component";
import { ResumeFormComponent } from "./container/resume-form/resume-form.component";
import { ContactDetailsComponent } from "./component/resume-form/contact-details/contact-details.component"
import { ContactDetailFormComponent } from "./component/resume-form/resume-dialogues/contact-detail-form/contact-detail-form.component"
import { EducationComponent } from "./component/resume-form/education/education.component"
import { EducationFormComponent } from "./component/resume-form/resume-dialogues/education-form/education-form.component"
import { EducationCardComponent } from "./component/resume-form/resume-card/education-card/education-card.component"
import { EducationListComponent } from "./component/resume-form/resume-list/education-list/education-list.component"
import { EmpHistoryComponent } from "./component/resume-form/emp-history/emp-history.component"
import { EmpHistoryFormComponent } from "./component/resume-form/resume-dialogues/emp-history-form/emp-history-form.component"
import { EmpHistoryListComponent } from "./component/resume-form/resume-list/emp-history-list/emp-history-list.component"
import { EmpHistoryCardComponent } from "./component/resume-form/resume-card/emp-history-card/emp-history-card.component"
import { InterestComponent } from "./component/resume-form/interest/interest.component"
import { InterestFormComponent } from "./component/resume-form/resume-dialogues/interest-form/interest-form.component"
import { InterestListComponent } from "./component/resume-form/resume-list/interest-list/interest-list.component"
import { InterestCardComponent } from "./component/resume-form/resume-card/interest-card/interest-card.component"
import { SkillComponent } from "./component/resume-form/skill/skill.component"
import { SkillFormComponent } from "./component/resume-form/resume-dialogues/skill-form/skill-form.component"
import { SkillListComponent } from "./component/resume-form/resume-list/skill-list/skill-list.component"
import { SkillCardComponent } from './component/resume-form/resume-card/skill-card/skill-card.component';
import { LanguageComponent } from './component/resume-form/language/language.component';
import { LanguageFormComponent } from "./component/resume-form/resume-dialogues/language-form/language-form.component"
import { LanguageListComponent } from './component/resume-form/resume-list/language-list/language-list.component';
import { LanguageCardComponent } from './component/resume-form/resume-card/language-card/language-card.component';
import { IndustrialExposureComponent } from './component/resume-form/industrial-exposure/industrial-exposure.component';
import { IndustrialExposureListComponent } from './component/resume-form/resume-list/industrial-exposure-list/industrial-exposure-list.component';
import { IndustrialExposureFormComponent } from './component/resume-form/resume-dialogues/industrial-exposure-form/industrial-exposure-form.component';
import { IndustrialExposureCardComponent } from './component/resume-form/resume-card/industrial-exposure-card/industrial-exposure-card.component';
import { AwardsAchivementComponent } from './component/resume-form/awards-achivement/awards-achivement.component';
import { AwardsAchivementFormComponent } from './component/resume-form/resume-dialogues/awards-achivement-form/awards-achivement-form.component';
import { AwardsAchivementListComponent } from './component/resume-form/resume-list/awards-achivement-list/awards-achivement-list.component';
import { AwardsAchivementCardComponent } from './component/resume-form/resume-card/awards-achivement-card/awards-achivement-card.component';


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
    ResumeNameComponent,
    UploadComponent,
    UploadImageComponent,
    UploadFromDiskComponent,
    ImportFromYoutubeComponent,
    ResumeFormComponent,
    ContactDetailsComponent,
    ContactDetailFormComponent,
    EducationComponent,
    EducationFormComponent,
    EducationCardComponent,
    EducationListComponent,
    EmpHistoryComponent,
    EmpHistoryFormComponent,
    EmpHistoryListComponent,
    EmpHistoryCardComponent,
    InterestComponent,
    InterestFormComponent,
    InterestListComponent,
    InterestCardComponent,
    SkillComponent,
    SkillFormComponent,
    SkillListComponent,
    SkillCardComponent,
    LanguageComponent,
    LanguageFormComponent,
    LanguageListComponent,
    LanguageCardComponent,
    IndustrialExposureComponent,
    IndustrialExposureListComponent,
    IndustrialExposureFormComponent,
    IndustrialExposureCardComponent,
    AwardsAchivementComponent,
    AwardsAchivementFormComponent,
    AwardsAchivementListComponent,
    AwardsAchivementCardComponent

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
