import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { Refrence } from './../../../../models/refrence';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ResumeRepository } from 'src/app/repository/resume-repository';

export interface DataType {
  resumeId: string;
  reference: Refrence;
}

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
//   styleUrls: ['./reference-form.component.css'],
})
export class ReferenceFormComponent {
  referenceForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ReferenceFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DataType,
    private resumeRepo: ResumeRepository, private alertService: AlertService
  ) {}

  ngOnInit(): void {
    const name = this.data.reference ? this.data.reference.name : null;
    const relationship = this.data.reference ? this.data.reference.relationship : null;
    const company = this.data.reference ? this.data.reference.company : null;
    const email = this.data.reference ? this.data.reference.email : null;
    const phone = this.data.reference ? this.data.reference.phone : null;
    const address = this.data.reference ? this.data.reference.address : null;

    this.referenceForm = new FormGroup({
      name: new FormControl(name, [Validators.required]),
      relationship: new FormControl(relationship, [Validators.required]),
      company: new FormControl(company, [Validators.required]),
      email: new FormControl(email, [Validators.required]),
      phone: new FormControl(phone, [Validators.required]),
      address: new FormControl(address, [Validators.required])
    })
  }

  addOrUpdate(){
    if(this.data.reference._id){
      this.update()
    } else (
      this.save()
    )
  }

  save() {
    const observer$ = this.resumeRepo.addReference(this.referenceForm.value, this.data.resumeId);
    observer$.subscribe(data=>{
      this.alertService.success('Reference added successfully');
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error.message);
    })
  }

  update() {
    const observer$ = this.resumeRepo.updateReference(this.referenceForm.value, this.data.reference._id, this.data.resumeId);
    observer$.subscribe(data=>{
      this.alertService.success('Reference updated successfully');
      this.dialogRef.close();
    }, error=>{
      this.alertService.error(error);
    })
  }
}
