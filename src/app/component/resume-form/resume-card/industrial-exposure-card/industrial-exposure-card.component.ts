import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { IndustrialExposureFormComponent } from '../../resume-dialogues/industrial-exposure-form/industrial-exposure-form.component';
@Component({
  selector: 'app-industrial-exposure-card',
  templateUrl: './industrial-exposure-card.component.html',
//   styleUrls: ['./industrial-exposure-form.component.css'],
})
export class IndustrialExposureCardComponent {
  @Input() industrialExposure: IndustrialExposure;
  @Input() resumeId: string;
  constructor(private matDialog: MatDialog ,private resumeRepo: ResumeRepository, private alertService: AlertService) {}

  edit() {
    this.matDialog.open(IndustrialExposureFormComponent, {
      width: '90%', height: '90%', data: { industrialExposure: this.industrialExposure, resumeId: this.resumeId}  
    })
  };

  delete() {
    this.resumeRepo.deleteIndustrialExposure(this.industrialExposure._id, this.resumeId).subscribe(data=>{
      this.alertService.success('Industrial Exposure Deleted successfully')
    }, error=>{
      this.alertService.error(error.message);
    })
  };
}
