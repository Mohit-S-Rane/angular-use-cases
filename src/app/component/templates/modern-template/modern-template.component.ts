import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Resume } from 'src/app/models/resume';
@Component({
    selector: 'app-modern-template',
    templateUrl: './modern-template.component.html',
    styleUrls: ['./modern-template.component.css'],
})
export class ModernTemplateComponent {
    @Input() resume: Resume;
    @Output() downloadTemplate = new EventEmitter<string>();
    constructor() { }

    download() { }
}
