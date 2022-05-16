import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpService } from './http-service';
import { AuthUtils } from './../utility/auth-utils';
import { Resume } from '../models/resume';

@Injectable()
export class ApiService {

  constructor(private httpService: HttpService) {}

  signup(data: {
    email: string;
    password: string;
    confirm_password: string;
    name: string;
    job_category: string;
    experience_level: string;
  }): Observable<User> {
    return this.httpService.post('/user/signup', data);
  }

  loginAndSetToken(data: { email: string; password: string }): Observable<User> {
    return this.httpService.get('/user/login', data).pipe(map(res=>{
      AuthUtils.setAuthToken(res.token)
      return res.data;
    }));
  }

  getUsers() {
    return this.httpService.get('/users');
  }

  sendResetPasswordEmail(data: { email: string }): Observable<any> {
    return this.httpService.get('/user/reset/password/email', data)
  }

  resetPassword(data: {code: string, new_password: string, confirm_password: string}): Observable<any> {
    return this.httpService.patch('/user/reset/password', data)
  }

  fetchMe(): Observable<User> {
    return this.httpService.get('/user/fetch');
  }

  fetchAllResume(): Observable<Resume[]> {
    return this.httpService.get('/resume/all')
  }

  saveResume(data: { name: string}) {
    return this.httpService.post('/resume/add/resume', data);
  }

  saveOrUpdateImage(image: File, resumeId: string): Observable<Resume> {
    const formData = new FormData();
    formData.append('profile_image', image) 
    return this.httpService.post('/resume/add/image/' + resumeId, formData)
  }

  deleteImage(resumeId: string) {
    return this.httpService.delete('/resume/delete/image/' + resumeId)
  }

  addVideo(resumeId: string, data: { video_url: string }) {
    return this.httpService.patch('/resume/import/video/' + resumeId, data);
  }

  updateContactDetails(data: any, contactDetailId: string) {
    return this.httpService.patch('/resume/update/contactDetails/' + contactDetailId, data)
  }

  addContactDetails(data: any, contactDetailId: string) {
    return this.httpService.post('/resume/add/contactDetails/' + contactDetailId, data)
  }

  addEducation(data: any, resumeId: string) {
    return this.httpService.post('/resume/add/education/' + resumeId, data);
  }

  updateEducation(data: any, educationId: string) {
    return this.httpService.patch('/resume/update/education/' + educationId, data);
  }

  deleteEducation(educationId: string) {
    return this.httpService.delete('/resume/delete/education/' + educationId )
  }

  addEmploymentHistory(data: any, resumeId: string) {
    return this.httpService.post('/resume/add/employmentHistory/' + resumeId, data)
  }

  updateEmploymentHistory(data: any, employmentHistoryId: string) {
    return this.httpService.patch('/resume/update/employmentHistory/' + employmentHistoryId, data)
  }

  deleteEmpploymentHistory(employmentHistoryId: string) {
    return this.httpService.delete('/resume/delete/employmentHistory/' + employmentHistoryId )
  }

  addInterest(data: any, resumeId: string){
    return this.httpService.post('/resume/add/interest/' + resumeId, data)
  }

  updateInterest(data: any, interestId: string){
    return this.httpService.patch('/resume/update/interest/' + interestId, data)
  }

  deleteInterest(interestId: string){
    return this.httpService.delete('/resume/delete/interest/' + interestId)
  }

  addSkill(data: any, resumeId: string){
    return this.httpService.post('/resume/add/skill/' + resumeId, data)
  }

  updateSkill(data: any, skillId: string){
    return this.httpService.patch('/resume/update/skill/' + skillId, data)
  }

  deleteSkill(skillId: string){
    return this.httpService.delete('/resume/delete/skill/' + skillId)
  }

  addLanguage(data: any, resumeId: string){
    return this.httpService.post('/resume/add/language/' + resumeId, data)
  }
  
  updateLanguage(data: any, languageId: string){
    return this.httpService.patch('/resume/update/language/' + languageId, data)
  }

  deleteLanguage(languageId: string){
    return this.httpService.delete('/resume/delete/language/' + languageId)
  }

  addIndustrialExposure(data: any, resumeId: string){
    return this.httpService.post('/resume/add/industrialExposure/' + resumeId, data)
  }
  
  updateIndustrialExposure(data: any, industrialExposureId: string){
    return this.httpService.patch('/resume/update/industrialExposure/' + industrialExposureId, data)
  }

  deleteIndustrialExposure(industrialExposureId: string){
    return this.httpService.delete('/resume/delete/industrialExposure/' + industrialExposureId)
  }

  addAwardsAchivement(data: any, resumeId: string){
    return this.httpService.post('/resume/add/award/' + resumeId, data)
  }
  
  updateAwardsAchivement(data: any, awardId: string){
    return this.httpService.patch('/resume/update/award/' + awardId, data)
  }

  deleteAwardsAchivement(awardId: string){
    return this.httpService.delete('/resume/delete/award/' + awardId)
  }

  addObjective(data: any, resumeId: string){
    return this.httpService.post('/resume/add/objective/' + resumeId, data)
  }
  
  updateObjective(data: any, objectiveId: string){
    return this.httpService.patch('/resume/update/objective/' + objectiveId, data)
  }

  deleteObjective(objectiveId: string){
    return this.httpService.delete('/resume/delete/objective/' + objectiveId)
  }

  addReference(data: any, resumeId: string){
    return this.httpService.post('/resume/add/refrence/' + resumeId, data)
  }
  
  updateReference(data: any, referenceId: string){
    return this.httpService.patch('/resume/update/refrence/' + referenceId, data)
  }

  deleteReference(referenceId: string){
    return this.httpService.delete('/resume/delete/refrence/' + referenceId)
  }

  addProjectDetail(data: any, resumeId: string){
    return this.httpService.post('/resume/add/projectDetail/' + resumeId, data)
  }
  
  updateProjectDetail(data: any, projectDetailId: string){
    return this.httpService.patch('/resume/update/projectDetail/' + projectDetailId, data)
  }

  deleteProjectDetail(projectDetailId: string){
    return this.httpService.delete('/resume/delete/projectDetail/' + projectDetailId)
  }
}
