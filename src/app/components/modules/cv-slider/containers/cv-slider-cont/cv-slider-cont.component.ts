import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TAB_OPTIONS } from '../../../../../enum/tab/tab-options.enum';
import { navigateFromTab } from '../../../../../helpers/router.helper';
import { scrollWhenSwipe } from '../../../../../helpers/scroll.helper';
import { TabStateInt } from '../../../../../interfaces/tab/tab-state.int';
import { CvService } from '../../../../../services/cv/cv.service';

@Component({
  selector: 'app-cv-slider-cont',
  templateUrl: './cv-slider-cont.component.html',
  styleUrls: [ './cv-slider-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvSliderContComponent {
  @Input() tabSelected: TabStateInt<TAB_OPTIONS>;

  constructor(public cvService: CvService, private router: Router) {}

  swipeTab(tab: TAB_OPTIONS) {
    scrollWhenSwipe();
    navigateFromTab(this.router, tab);
  }
}
