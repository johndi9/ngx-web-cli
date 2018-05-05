import { Component, Input } from '@angular/core';
import { EmployInt } from '../../../../../../interfaces/cv/employ/employ.int';
import { ProjectInt } from '../../../../../../interfaces/cv/project/project.int';

@Component({
  selector: 'app-projects-pres',
  templateUrl: './projects-pres.component.html',
  styleUrls: [ './projects-pres.component.scss' ]
})
export class ProjectsPresComponent {
  @Input() projects: ProjectInt[];
  @Input() employs: EmployInt[];
}
