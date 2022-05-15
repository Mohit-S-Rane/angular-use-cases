import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';
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
  constructor(private matDialog: MatDialog ,private apiService: ApiService, private alertService: AlertService) {}

  edit() {
    this.matDialog.open(IndustrialExposureFormComponent, {
      width: '90%', height: '90%', data: { industrialExposure: this.industrialExposure}  
    })
  };

  delete() {
    this.apiService.deleteIndustrialExposure(this.industrialExposure._id).subscribe(data=>{
      this.alertService.success('Industrial Exposure Deleted successfully')
    }, error=>{
      this.alertService.error(error.message);
    })
  };
}
