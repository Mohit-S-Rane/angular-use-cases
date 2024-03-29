import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';
import { Resume } from 'src/app/models/resume';
import { ResumeRepository } from 'src/app/repository/resume-repository';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent implements AfterViewInit {
  isUploaded = false;
  isSelected = false;
  loading = false;
  selectButtonIcon = 'add';
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('previewImg') previewImg: ElementRef;
  file: File;
  MAX_IMAGE_SIZE = 2 * 1000 * 1000;
  url = '';
  @Input() resume: Resume;

  constructor(private alertService: AlertService, private resumeRepo: ResumeRepository) {
  }

  ngAfterViewInit() {
    this.init();
  }

  init() {
    if (this.resume) {
      this.isUploaded = !!this.resume.image_url;
      if (this.isUploaded) {
        this.isSelected = true;
        this.url = this.resume.image_url;
      }
    }
  }

  onImageSelect(value) {
    const file = value.target.files[0];
    this.file = file;
    if (this.file.size > this.MAX_IMAGE_SIZE) {
      return this.alertService.error('File size should be less than 2mb');
    }
    if (file.type === 'image/png' || 'image/jpg' || 'image/jpeg' || 'image/JPG') {
      this.isSelected = true;
      this.selectButtonIcon = 'cached';
      this.previewImg.nativeElement.src = window.URL.createObjectURL(this.file);
    } else {
      return this.alertService.error('Image must be of type png,jpg or jpeg');
    }
  }

  onFileSelect() {
    this.fileInput.nativeElement.click();
  }

  save() {
    this.loading = true;
    this.resumeRepo.saveOrUpdateImage(this.file, this.resume._id).subscribe(data => {
      this.loading = false;
      this.isUploaded = true;
      this.url = data.image_url;
      this.alertService.success('Image uploaded Successfully');
    }, error => {
      this.loading = false;
    });
  }

  delete() {
    this.loading = true;
    this.resumeRepo.deleteImage(this.resume._id).subscribe(data => {
      this.loading = false;
      this.alertService.success('Image deleted Successfully');
      this.isUploaded = false;
      this.isSelected = false;
      this.url = '';
    }, error => {
      this.loading = false;
    });
  }
}
