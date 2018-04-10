import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CvService } from '../../../../../services/cv/cv.service';

@Component({
  selector: 'app-sticky-sidebar-cont',
  templateUrl: './sticky-sidebar-cont.component.html',
  styleUrls: [ './sticky-sidebar-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickySidebarContComponent {
  constructor(public cvService: CvService) {}
}
