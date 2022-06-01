import { AfterContentInit, Component, Input } from '@angular/core';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { Resume } from 'src/app/models/resume';
import { Skill } from 'src/app/models/skill';
@Component({
    selector: 'app-template-employment-history',
    templateUrl: './template-employment-history.component.html',
    styleUrls: ['./template-employment-history.component.css'],
})
export class TemplateEmploymentHistoryComponent {
    @Input() employmentHistory: EmploymentHistory;

    constructor() {
    }
}