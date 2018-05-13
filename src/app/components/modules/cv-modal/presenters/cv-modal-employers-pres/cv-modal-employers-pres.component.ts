import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { getModalDataTitleFromEmploy } from '../../../../../helpers/modal.helper';
import { EmployInt } from '../../../../../interfaces/cv/employ/employ.int';

@Component({
  selector: 'app-cv-modal-employers-pres',
  templateUrl: './cv-modal-employers-pres.component.html',
  styleUrls: [ './cv-modal-employers-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvModalEmployersPresComponent {
  @Input() employ: EmployInt;

  getModalDataTitleFromEmploy = getModalDataTitleFromEmploy;
}
