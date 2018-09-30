import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TAB_OPTIONS } from '../../../../../enum/tab/tab-options.enum';
import { stopEventPropagation } from '../../../../../helpers/event.helper';
import { getImage } from '../../../../../helpers/image.helper';
import { getTabs } from '../../../../../helpers/tab.helper';
import { CurriculumInt } from '../../../../../interfaces/cv/curriculum.int';
import { TabStateInt } from '../../../../../interfaces/tab/tab-state.int';
import { XhrStateInt } from '../../../../../interfaces/xhr-state/xhr-state.int';

@Component({
  selector: 'app-sticky-sidebar-small-pres',
  templateUrl: './sticky-sidebar-small-pres.component.html',
  styleUrls: [ './sticky-sidebar-small-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickySidebarSmallPresComponent {
  @Output() onTabSelected: EventEmitter<TAB_OPTIONS> = new EventEmitter<TAB_OPTIONS>();
  @Input() cv: XhrStateInt<CurriculumInt>;
  @Input() tabSelected: TabStateInt<TAB_OPTIONS>;

  getImage = getImage;
  getTabs = getTabs;

  swipeTab(event: MouseEvent, tab: TAB_OPTIONS) {
    stopEventPropagation(event);
    this.onTabSelected.emit(tab);
  }
}
