import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { getEmployerFromCv } from '../../../../../helpers/cv.helper';
import { UrlHomeInterface } from '../../../../../helpers/url.helper';
import { CurriculumInt } from '../../../../../interfaces/cv/curriculum.int';
import { XhrStateInt } from '../../../../../interfaces/xhr-state/xhr-state.int';

@Component({
  selector: 'app-cv-modal-pres',
  templateUrl: './cv-modal-pres.component.html',
  styleUrls: [ './cv-modal-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvModalPresComponent {
  @Output() onCloseModal: EventEmitter<void> = new EventEmitter<void>();

  @Input() cv: XhrStateInt<CurriculumInt>;
  @Input() urlState: UrlHomeInterface;

  getEmployerFromCv = getEmployerFromCv;

  closeModal() {
    this.onCloseModal.emit();
  }
}
