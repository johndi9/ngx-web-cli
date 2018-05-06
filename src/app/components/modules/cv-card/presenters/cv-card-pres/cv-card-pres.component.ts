import { Component, Input } from '@angular/core';
import { getImage } from '../../../../../helpers/image.helper';

@Component({
  selector: 'app-cv-card-pres',
  templateUrl: './cv-card-pres.component.html',
  styleUrls: [ './cv-card-pres.component.scss' ]
})
export class CvCardPresComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() thumbImg: string;

  getImage = getImage;
}
