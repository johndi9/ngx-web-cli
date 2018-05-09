import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EmployInt } from '../../../../../../interfaces/cv/employ/employ.int';

@Component({
  selector: 'app-employers-pres',
  templateUrl: './employers-pres.component.html',
  styleUrls: [ './employers-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployersPresComponent {
  @Input() employs: EmployInt[];
}
