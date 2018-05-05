import { Component, Input, OnInit } from '@angular/core';
import { CurriculumInt } from '../../../../../interfaces/cv/curriculum.int';
import { XhrStateInt } from '../../../../../interfaces/xhr-state/xhr-state.int';

@Component({
  selector: 'app-cv-slider-pres',
  templateUrl: './cv-slider-pres.component.html',
  styleUrls: ['./cv-slider-pres.component.scss']
})
export class CvSliderPresComponent implements OnInit {
  @Input() cv: XhrStateInt<CurriculumInt>;
  constructor() { }

  ngOnInit() {
  }

}
