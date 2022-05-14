import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Interest } from 'src/app/models/interest';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { InterestFormComponent } from '../../resume-dialogues/interest-form/interest-form.component';
@Component({
  selector: 'app-interest-card',
  templateUrl: './interest-card.component.html',
//   styleUrls: ['./interest-card.component.css'],
})
export class InterestCardComponent {
  @Input() interest: Interest;
  constructor(private matDialog: MatDialog ,
              private apiService: ApiService, 
              private alertService: AlertService) {}

  edit() {
    this.matDialog.open(InterestFormComponent, {
      width: '90%', height: '90%', data: { interest: this.interest}  
    })
  };

  delete() {
    this.apiService.deleteInterest(this.interest._id).subscribe(data=>{
      this.alertService.success('Interest Deleted Successfully');
    }, error=>{
      this.alertService.error(error.message);
    })
  }
}
