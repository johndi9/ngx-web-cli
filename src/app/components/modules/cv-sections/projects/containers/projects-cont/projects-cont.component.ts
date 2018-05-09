import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EmployInt } from '../../../../../../interfaces/cv/employ/employ.int';
import { ProjectInt } from '../../../../../../interfaces/cv/project/project.int';

@Component({
  selector: 'app-projects-cont',
  templateUrl: './projects-cont.component.html',
  styleUrls: [ './projects-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectsContComponent {
  @Input() projects: ProjectInt[];
  @Input() employs: EmployInt[];
}
