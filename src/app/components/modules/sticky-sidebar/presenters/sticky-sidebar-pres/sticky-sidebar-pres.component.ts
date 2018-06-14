import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { TAB_OPTIONS } from '../../../../../enum/tab/tab-options.enum';
import { getImage } from '../../../../../helpers/image.helper';
import { getTabs, getTranslationTabKeys } from '../../../../../helpers/tab.helper';
import { CurriculumInt } from '../../../../../interfaces/cv/curriculum.int';
import { TabStateInt } from '../../../../../interfaces/tab/tab-state.int';
import { XhrStateInt } from '../../../../../interfaces/xhr-state/xhr-state.int';

@Component({
  selector: 'app-sticky-sidebar-pres',
  templateUrl: './sticky-sidebar-pres.component.html',
  styleUrls: [ './sticky-sidebar-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickySidebarPresComponent {
  @Output() onTabSelected: EventEmitter<TAB_OPTIONS> = new EventEmitter<TAB_OPTIONS>();
  @Input() cv: XhrStateInt<CurriculumInt>;
  @Input() tabSelected: TabStateInt<TAB_OPTIONS>;

  getImage = getImage;
  getTabs = getTabs;
  getTranslationTabKeys = getTranslationTabKeys;

  swipeTab(tab: TAB_OPTIONS) {
    this.onTabSelected.emit(tab);
  }
}
