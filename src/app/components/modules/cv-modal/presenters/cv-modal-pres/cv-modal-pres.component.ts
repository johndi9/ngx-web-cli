import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cv-modal-pres',
  templateUrl: './cv-modal-pres.component.html',
  styleUrls: [ './cv-modal-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvModalPresComponent {
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter<void>();

  closeModal() {
    this.onCloseModal.emit();
  }
}
