import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { EmployInt } from '../../../../../../interfaces/cv/employ/employ.int';

@Component({
  selector: 'app-employers-cont',
  templateUrl: './employers-cont.component.html',
  styleUrls: [ './employers-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployersContComponent {
  @Input() employs: EmployInt[];
}
