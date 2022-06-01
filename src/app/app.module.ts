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
import { DashboardComponent } from './container/layout/dashboard/dashboard.component';
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
import { ObjectiveComponent } from './component/resume-form/objective/objective.component';
import { ObjectiveListComponent } from './component/resume-form/resume-list/objective-list/objective-list.component';
import { ObjectiveFormComponent } from './component/resume-form/resume-dialogues/objective-form/objective-form.component';
import { ObjectiveCardComponent } from './component/resume-form/resume-card/objective-card/objective-card.component';
import { ReferenceComponent } from './component/resume-form/reference/reference.component';
import { ReferenceListComponent } from './component/resume-form/resume-list/reference-list/reference-list.component';
import { ReferenceFormComponent } from './component/resume-form/resume-dialogues/reference-form/reference-form.component';
import { ReferenceCardComponent } from './component/resume-form/resume-card/reference-card/reference-card.component';
import { ProjectDetailComponent } from './component/resume-form/project-detail/project-detail.component';
import { ProjectDetailListComponent } from './component/resume-form/resume-list/project-detail-list/project-detail-list.component';
import { ProjectDetailFormComponent } from './component/resume-form/resume-dialogues/project-detail-form/project-detail-form.component';
import { ProjectDetailCardComponent } from './component/resume-form/resume-card/project-detail-card/project-detail-card.component';
import { StrengthComponent } from './component/resume-form/strength/strength.component';
import { StrengthListComponent } from './component/resume-form/resume-list/strength-list/strength-list.component';
import { StrengthFormComponent } from './component/resume-form/resume-dialogues/strength-form/strength-form.component';
import { StrengthCardComponent } from './component/resume-form/resume-card/strength-card/strength-card.component';
import { WeaknessComponent } from './component/resume-form/weakness/weakness.component';
import { WeaknessListComponent } from './component/resume-form/resume-list/weakness-list/weakness-list.component';
import { WeaknessFormComponent } from './component/resume-form/resume-dialogues/weakness-form/weakness-form.component';
import { WeaknessCardComponent } from './component/resume-form/resume-card/weakness-card/weakness-card.component';
import { Truncate } from './pipes/truncate';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers';
import { AuthRepository } from './repository/auth-repository';
import { ResumeRepository } from './repository/resume-repository'
import { ResumeComponent } from './container/dashboard/resume/resume.component';
import { SettingComponent } from './container/dashboard/setting/setting.component';
import { HeaderComponent } from './container/layout/header/header.component';
import { LogoutComponent } from './component/logout/logout.component';
import { NotFoundComponent } from './container/not-found/not-found.component';
import { ProfileSettingComponent } from './component/profile-settings/profile-settings.component';
import { PasswordSettingComponent } from './component/password-setting/password-setting.component';
import { ResumeCardComponent } from './component/resume-card/resume-card.component';
import { ErrorComponent } from './component/error/error.component';
import { AddOrEditResumeComponent } from './component/dialogues/add-or-edit-resume/add-or-edit-resume.component';
import { TemplatesComponent } from './container/templates/templates.component';
import { SingleTemplateComponent } from './container/single-template/single-template.component';
import { TemplateCardComponent } from './component/template-card/template-card.component';
import { BluesTemplateComponent } from './component/templates/blues-template/blues-template.component';
import { ClassicTemplateComponent } from './component/templates/classic-template/classic-template.component';
import { ModernTemplateComponent } from './component/templates/modern-template/modern-template.component';
import { RoyalTemplateComponent } from './component/templates/royal-template/royal-template.component';
import { TraditionalPanelTemplateComponent } from './component/templates/traditional-template/traditional-template.component';
import { SingleResumeComponent } from './container/single-resume/single-resume.component';
import { TemplateContactDetailComponent } from './component/resume-template/contact-detail/template-contact-detail.component';
import { TemplateButtonsComponent } from './component/resume-template/template-buttons/template-buttons.component';
import { TemplateSkillCardComponent } from './component/resume-template/template-skill-card/template-skill-card.component';
import { TemplateLanguageCardComponent } from './component/resume-template/template-language-card/template-language-card.component';
import { TemplateStrengthCardComponent } from './component/resume-template/template-strength-card/template-strength-card.component';
import { TemplateWeaknessCardComponent } from './component/resume-template/template-weakness-card/template-weakness-card.component';


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
    AwardsAchivementCardComponent,
    ObjectiveComponent,
    ObjectiveListComponent,
    ObjectiveFormComponent,
    ObjectiveCardComponent,
    ReferenceComponent,
    ReferenceListComponent,
    ReferenceFormComponent,
    ReferenceCardComponent,
    ProjectDetailComponent,
    ProjectDetailListComponent,
    ProjectDetailFormComponent,
    ProjectDetailCardComponent,
    StrengthComponent,
    StrengthListComponent,
    StrengthFormComponent,
    StrengthCardComponent,
    WeaknessComponent,
    WeaknessListComponent,
    WeaknessFormComponent,
    WeaknessCardComponent,
    Truncate,
    ResumeComponent,
    SettingComponent,
    HeaderComponent,
    LogoutComponent, 
    NotFoundComponent,
    ProfileSettingComponent,
    PasswordSettingComponent,
    ResumeCardComponent,
    ErrorComponent,
    AddOrEditResumeComponent,
    TemplatesComponent,
    SingleTemplateComponent,
    TemplateCardComponent,
    BluesTemplateComponent,
    ClassicTemplateComponent,
    ModernTemplateComponent,
    RoyalTemplateComponent,
    TraditionalPanelTemplateComponent,
    SingleResumeComponent,
    TemplateContactDetailComponent,
    TemplateButtonsComponent,
    TemplateSkillCardComponent,
    TemplateLanguageCardComponent,
    TemplateStrengthCardComponent,
    TemplateWeaknessCardComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(rootReducer),
    
  ],
  providers: [HttpService, ApiService,AlertService, AuthGuard, AnonGuard, VerificationCompleted, VerificationInComplete, OnBoardingComplete, OnBoardingInComplete, AuthRepository, ResumeRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
