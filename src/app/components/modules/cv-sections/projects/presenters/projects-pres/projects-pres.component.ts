import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { getEmployerFromProject } from '../../../../../../helpers/project.helper';
import { EmployInt } from '../../../../../../interfaces/cv/employ/employ.int';
import { ProjectInt } from '../../../../../../interfaces/cv/project/project.int';

@Component({
  selector: 'app-projects-pres',
  templateUrl: './projects-pres.component.html',
  styleUrls: [ './projects-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsPresComponent {
  @Input() projects: ProjectInt[];
  @Input() employs: EmployInt[];

  getEmployerFromProject = getEmployerFromProject;
}
