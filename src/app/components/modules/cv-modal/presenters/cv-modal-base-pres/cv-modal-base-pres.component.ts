import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModalTitleInt } from '../../../../../interfaces/modal/modal.int';

@Component({
  selector: 'app-cv-modal-base-pres',
  templateUrl: './cv-modal-base-pres.component.html',
  styleUrls: [ './cv-modal-base-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvModalBasePresComponent {
  @Input() data: ModalTitleInt;
}
