import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertService } from 'src/app/services/alert-service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent {
  isUploaded = false;
  isSelected = false;
  selectButtonIcon = 'add';
  file: File;
  MAX_IMAGE_SIZE = 2 * 1000 * 1000;
  url = '';

  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('previewImg') previewImg: ElementRef;

  constructor(private alertService: AlertService) {}

  onImageSelect(value: any) {
    const file = value.target.files[0];
    this.file = file;
    if (this.file.size > this.MAX_IMAGE_SIZE){
        return this.alertService.error('File size should be less than 2MB')  
    }

    if(file.type === 'image/png' || 'image/jpg' || 'image/jpeg' || 'image/JPG'){
        this.isSelected = true;
        this.selectButtonIcon = 'cached';
        this.previewImg.nativeElement.src = window.URL.createObjectURL(this.file);
    } else {
        return this.alertService.error('Image must be of type png, jpg or jpeg')
    }
  }

  onFileSelect() {
    this.fileInput.nativeElement.click();
  }
}
