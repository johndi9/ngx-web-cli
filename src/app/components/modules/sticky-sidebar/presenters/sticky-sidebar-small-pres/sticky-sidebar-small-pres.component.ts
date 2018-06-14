import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { TAB_OPTIONS } from '../../../../../enum/tab/tab-options.enum';
import { getImage } from '../../../../../helpers/image.helper';
import { getTabs, getTranslationTabKeys } from '../../../../../helpers/tab.helper';
import { CurriculumInt } from '../../../../../interfaces/cv/curriculum.int';
import { TabStateInt } from '../../../../../interfaces/tab/tab-state.int';
import { XhrStateInt } from '../../../../../interfaces/xhr-state/xhr-state.int';

@Component({
  selector: 'app-sticky-sidebar-small-pres',
  templateUrl: './sticky-sidebar-small-pres.component.html',
  styleUrls: [ './sticky-sidebar-small-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StickySidebarSmallPresComponent implements OnChanges {
  @Output() onTabSelected: EventEmitter<TAB_OPTIONS> = new EventEmitter<TAB_OPTIONS>();
  @Input() cv: XhrStateInt<CurriculumInt>;
  @Input() tabSelected: TabStateInt<TAB_OPTIONS>;

  @HostBinding('style.height.px') height = null;

  getImage = getImage;
  getTabs = getTabs;
  getTranslationTabKeys = getTranslationTabKeys;

  ngOnChanges(changes: SimpleChanges) {
    if (changes[ 'tabSelected' ] && changes[ 'tabSelected' ].currentValue && changes[ 'tabSelected' ].previousValue &&
      changes[ 'tabSelected' ].currentValue.height !== changes[ 'tabSelected' ].previousValue.height) {
      this.height = this.tabSelected.height;
    }
  }

  swipeTab(tab: TAB_OPTIONS) {
    this.onTabSelected.emit(tab);
  }
}
