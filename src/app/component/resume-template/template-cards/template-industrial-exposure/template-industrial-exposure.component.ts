import { AfterContentInit, Component, Input } from '@angular/core';
import { AwardsAchivement } from 'src/app/models/awards-achivement';
import { EmploymentHistory } from 'src/app/models/employment-history';
import { IndustrialExposure } from 'src/app/models/industrial-exposure';
import { Resume } from 'src/app/models/resume';
import { Skill } from 'src/app/models/skill';
@Component({
    selector: 'app-template-industrial-exposure',
    templateUrl: './template-industrial-exposure.component.html',
    styleUrls: ['./template-industrial-exposure.component.css'],
})
export class TemplateIndustrialExposureComponent {
    @Input() industrialExposure: IndustrialExposure;

    constructor() {
    }
}