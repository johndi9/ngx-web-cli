import { AfterContentInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { isMobile } from '../../../../../helpers/device.helper';
import { getImage } from '../../../../../helpers/image.helper';

@Component({
  selector: 'app-dynamic-header-pres',
  templateUrl: './dynamic-header-pres.component.html',
  styleUrls: [ './dynamic-header-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicHeaderPresComponent implements AfterContentInit {
  @Input() videoPath: string;

  showVideo: boolean;
  getImage = getImage;

  constructor() {
    this.showVideo = !isMobile();
  }

  async ngAfterContentInit() {
    if (this.showVideo) {
      const videoElem = document.getElementById('vid') as HTMLVideoElement;
      await videoElem.play();
      if (videoElem.paused) {
        this.showVideo = false;
      }
    }
  }

}
