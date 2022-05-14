import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Skill } from 'src/app/models/skill';
import { SkillFormComponent } from '../resume-dialogues/skill-form/skill-form.component';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
//   styleUrls: ['./skill.component.css'],
})
export class SkillComponent {
  @Input() skills: Skill[];
  @Input() resumeId: string;
  constructor(public matDialog: MatDialog) {}

  add() {
    this.matDialog.open(SkillFormComponent, {
        width: '50%', height: '40%', data: {resumeId: this.resumeId, skill: this.skills}
    })
}
}
