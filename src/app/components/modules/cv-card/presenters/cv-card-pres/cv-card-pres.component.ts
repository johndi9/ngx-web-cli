import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { getImage } from '../../../../../helpers/image.helper';
import { ImageUrlInt } from '../../../../../interfaces/image/image.int';

@Component({
  selector: 'app-cv-card-pres',
  templateUrl: './cv-card-pres.component.html',
  styleUrls: [ './cv-card-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvCardPresComponent {
  @Output() openModalId: EventEmitter<number> = new EventEmitter<number>();
  @Input() id: number;
  @Input() title: string;
  @Input() thumbImg: ImageUrlInt;

  getImage = getImage;

  openModal(id: number) {
    this.openModalId.emit(id);
  }
}
