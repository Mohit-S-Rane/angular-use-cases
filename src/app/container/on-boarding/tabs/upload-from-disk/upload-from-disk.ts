import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
  selector: 'app-upload-from-disk',
  templateUrl: './upload-from-disk.html',
  styleUrls: ['./upload-from-disk.css'],
})
export class UploadFromDiskComponent {
  selectButtonIcon = 'add';
  constructor() {}
}
