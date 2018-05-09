import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { TAB_OPTIONS } from '../../../../../enum/tab/tab-options.enum';
import { newTabNavigation } from '../../../../../helpers/router.helper';
import { CvService } from '../../../../../services/cv/cv.service';

@Component({
  selector: 'app-sticky-sidebar-cont',
  templateUrl: './sticky-sidebar-cont.component.html',
  styleUrls: [ './sticky-sidebar-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickySidebarContComponent {
  constructor(public cvService: CvService, private router: Router) {}

  swipeTab(tab: TAB_OPTIONS) {
    newTabNavigation(this.router, tab);
  }
}
