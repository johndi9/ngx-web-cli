import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalTitleInt } from '../../../../../interfaces/modal/modal.int';

@Component({
  selector: 'app-cv-modal-base-pres',
  templateUrl: './cv-modal-base-pres.component.html',
  styleUrls: [ './cv-modal-base-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvModalBasePresComponent {
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter<void>();
  @Input() data: ModalTitleInt;

  closeModal() {
    this.onCloseModal.emit();
  }
}
