import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements AfterViewInit{
  @ViewChild('myTag') myTag: ElementRef;
  @ViewChildren('myTags') myTags: QueryList<any>;

  constructor(private elementRef: ElementRef) {
    console.log(this.myTags);
   }

   ngAfterViewInit(): void {
     console.log(this.myTag);

     this.myTags.forEach(data=>{
       console.log(data);
     })
     
   }
}
