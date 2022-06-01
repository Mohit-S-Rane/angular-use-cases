import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
    selector: 'app-royal-template',
    templateUrl: './traditional-template.component.html',
    styleUrls: ['./traditional-template.component.css'],
})
export class TraditionalPanelTemplateComponent {
    @Input() resume: Resume;
    @Output() downloadTemplate = new EventEmitter<string>();
    constructor() { }

    download() { }
}
