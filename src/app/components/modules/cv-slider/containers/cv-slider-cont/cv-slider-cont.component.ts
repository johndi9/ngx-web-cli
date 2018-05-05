import { Component } from '@angular/core';
import { CvService } from '../../../../../services/cv/cv.service';

@Component({
  selector: 'app-cv-slider-cont',
  templateUrl: './cv-slider-cont.component.html',
  styleUrls: [ './cv-slider-cont.component.scss' ]
})
export class CvSliderContComponent {
  constructor(public cvService: CvService) {}
}
