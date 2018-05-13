import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { getModalDataTitleFromEmploy } from '../../../../../helpers/modal.helper';
import { EmployInt } from '../../../../../interfaces/cv/employ/employ.int';

@Component({
  selector: 'app-cv-modal-employers-pres',
  templateUrl: './cv-modal-employers-pres.component.html',
  styleUrls: [ './cv-modal-employers-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvModalEmployersPresComponent {
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() employ: EmployInt;

  getModalDataTitleFromEmploy = getModalDataTitleFromEmploy;

  closeModal() {
    this.onCloseModal.emit();
  }
}
