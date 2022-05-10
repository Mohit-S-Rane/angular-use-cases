import { Component, OnInit } from '@angular/core';
import { Resume } from 'src/app/models/resume';
import { ApiService } from 'src/app/services/api-service';

@Component({
  selector: 'app-on-boarding',
  templateUrl: './on-boarding.component.html',
  styleUrls: ['./on-boarding.component.css'],
})
export class OnBoardingComponent implements OnInit {
  resume: Resume;
  isFirstStepCompleted = false;
  loading = true;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.fetchAllResume().subscribe(data=>{
      if(data.length){
        this.resume = data[0];
        this.isFirstStepCompleted = true;
        this.loading = false;
      }
    })
  }
}
