import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TAB_OPTIONS } from '../../../../../enum/tab/tab-options.enum';
import { CurriculumInt } from '../../../../../interfaces/cv/curriculum.int';
import { XhrStateInt } from '../../../../../interfaces/xhr-state/xhr-state.int';

@Component({
  selector: 'app-cv-slider-pres',
  templateUrl: './cv-slider-pres.component.html',
  styleUrls: [ './cv-slider-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvSliderPresComponent {
  @Input() cv: XhrStateInt<CurriculumInt>;
  @Output() onTabSelected: EventEmitter<TAB_OPTIONS> = new EventEmitter<TAB_OPTIONS>();

  swipeTab(tab: TAB_OPTIONS) {
    this.onTabSelected.emit(tab);
  }
}
