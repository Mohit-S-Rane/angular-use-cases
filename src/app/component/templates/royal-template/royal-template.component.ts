import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
    selector: 'app-royal-template',
    templateUrl: './royal-template.component.html',
    styleUrls: ['./royal-template.component.css'],
})
export class RoyalTemplateComponent {
    @Input() resume: Resume;
    @Output() downloadTemplate = new EventEmitter<string>();
    constructor() { }

    download() { }
}
