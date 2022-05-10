import { AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit{
  @ContentChild('myDiv') myTab: ElementRef;
  @ContentChildren('myDiv2') myTab2: QueryList<any>;
  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.myTab);
    console.log(this.myTab2);
    
  }
}
