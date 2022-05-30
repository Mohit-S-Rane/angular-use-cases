import { Component } from '@angular/core';
import { Utility } from './../../utility/utility';
@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css'],
})
export class TemplatesComponent {
  templates = Utility.Templates;
  constructor() {
    
  }
}
