import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TAB_OPTIONS } from '../../../../../enum/tab/tab-options.enum';
import { getImage } from '../../../../../helpers/image.helper';
import { getTabs, getUrlTabs } from '../../../../../helpers/tab.helper';
import { CurriculumInt } from '../../../../../interfaces/cv/curriculum.int';
import { XhrStateInt } from '../../../../../interfaces/xhr-state/xhr-state.int';

@Component({
  selector: 'app-sticky-sidebar-pres',
  templateUrl: './sticky-sidebar-pres.component.html',
  styleUrls: [ './sticky-sidebar-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickySidebarPresComponent {
  @Input() cv: XhrStateInt<CurriculumInt>;
  @Input() tabSelected: TAB_OPTIONS;
  @Output() onTabSelected: EventEmitter<TAB_OPTIONS> = new EventEmitter<TAB_OPTIONS>();

  getImage = getImage;
  getTabs = getTabs;
  getUrlTabs = getUrlTabs;

  tabKeys: string[] = [ 'personalInfoTitle', 'projectsTitle', 'employsTitle', 'educationTitle', 'otherInfoTitle', 'contactTitle' ];

  swipeTab(tab: TAB_OPTIONS) {
    this.onTabSelected.emit(tab);
  }
}
