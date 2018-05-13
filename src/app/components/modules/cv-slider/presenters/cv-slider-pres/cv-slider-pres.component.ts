import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() onTabSelected: EventEmitter<TAB_OPTIONS> = new EventEmitter<TAB_OPTIONS>();
  @Input() cv: XhrStateInt<CurriculumInt>;
  @Input() tabSelected: TAB_OPTIONS;

  constructor(private element: ElementRef) {}

  swipeTab(tab: TAB_OPTIONS) {
    this.onTabSelected.emit(tab);
  }

  getCurrentTabHeight(tab: TAB_OPTIONS) {
    return this.element.nativeElement.querySelectorAll('.swiper-slide-inner')[ tab ].scrollHeight;
  }
}
