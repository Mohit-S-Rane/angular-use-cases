import { Component, Input, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Resume } from 'src/app/models/resume';
import { ResumeRepository } from 'src/app/repository/resume-repository';
import { AlertService } from 'src/app/services/alert-service';
import { ApiService } from 'src/app/services/api-service';


@Component({
  selector: 'app-import-from-youtube',
  templateUrl: './import-from-youtube.component.html',
  styleUrls: ['./import-from-youtube.component.css'],
})



export class ImportFromYoutubeComponent implements AfterViewInit {
  youtubeForm: FormGroup;
  isVideoUploaded = false;
  uploadAgain = false;
  loading = false;
  YOUTUBE_REGEX = '^((?:https?:)?\\/\\/)?((?:www|m)\\.)?((?:youtube\\.' +
    'com|youtu.be))(\\/(?:[\\w\\-]+\\?v=|embed\\/|v\\/)?)([\\w\\-]+)(\\S+)?$';
  @Input() resume: Resume;

  ngAfterViewInit() {
    this.isVideoUploaded = !!this.resume.video_url;
  }

  constructor(private resumeRepo: ResumeRepository, private alertService: AlertService) {
    this.youtubeForm = new FormGroup({
      video_url: new FormControl(null, [Validators.required, Validators.pattern(this.YOUTUBE_REGEX)])
    });
  }

  uploadVideo() {
    this.loading = true;
    throw this.resumeRepo.addVideo(this.resume._id, this.youtubeForm.value).subscribe(data => {
      this.loading = false;
      const message = this.isVideoUploaded ? 'Video Updated Successfully' : 'Video uploaded SuccessFully';
      this.isVideoUploaded = true;
      this.alertService.success(message);
    }, error => {
      this.loading = false;
    });
  }
}
