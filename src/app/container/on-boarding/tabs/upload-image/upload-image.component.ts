import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css'],
})
export class UploadImageComponent {
  isUploaded = false;
  isSelected = false;
  selectButtonIcon = 'add';

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor() {}

  onImageSelect(value: any) {}

  onFileSelect() {
    this.fileInput.nativeElement.click(); 
  }
}
