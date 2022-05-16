import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { ProjectDetail } from './../../../../models/project-detail';

export interface DataType {
  resumeId: string;
  projectDetail: ProjectDetail;
}

@Component({
  selector: 'app-project-detail-form',
  templateUrl: './project-detail-form.component.html',
//   styleUrls: ['./project-detail-form.component.css'],
})
export class ProjectDetailFormComponent {
  projectDetailForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ProjectDetailFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private apiService: ApiService, private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const title = this.data.projectDetail ? this.data.projectDetail.title : null;
    const description = this.data.projectDetail ? this.data.projectDetail.description : null;
    const duration = this.data.projectDetail ? this.data.projectDetail.duration : null;
    const role = this.data.projectDetail ? this.data.projectDetail.role : null;

    this.projectDetailForm = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description,  [Validators.required]),
      duration: new FormControl(duration, [Validators.required]),
      role: new FormControl(role, [Validators.required]),
    })
  }

  addOrUpdate(){
    if(this.data.projectDetail?._id){
      this.update()
    } else (
      this.save()
    )
  }

  save() {
    const observer$ = this.apiService.addProjectDetail(this.projectDetailForm.value, this.data.resumeId);
    observer$.subscribe(data=>{
      this.alertService.success('Project Detail added successfully');
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error.message);
    })
  }

  update() {
    const observer$ = this.apiService.updateProjectDetail(this.projectDetailForm.value, this.data.projectDetail._id);
    observer$.subscribe(data=>{
      this.alertService.success('Project Detail updated successfully');
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error);
    })
  }
}
