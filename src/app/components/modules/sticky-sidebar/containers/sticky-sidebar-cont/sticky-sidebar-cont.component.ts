import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TAB_OPTIONS } from '../../../../../enum/tab/tab-options.enum';
import { navigateFromTab } from '../../../../../helpers/router.helper';
import { TabStateInt } from '../../../../../interfaces/tab/tab-state.int';
import { CvService } from '../../../../../services/cv/cv.service';

@Component({
  selector: 'app-sticky-sidebar-cont',
  templateUrl: './sticky-sidebar-cont.component.html',
  styleUrls: [ './sticky-sidebar-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickySidebarContComponent {
  @Input() tabSelected: TabStateInt<TAB_OPTIONS>;

  constructor(public cvService: CvService, private router: Router) {}

  swipeTab(tab: TAB_OPTIONS) {
    navigateFromTab(this.router, tab);
  }
}
