import { AfterContentInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-header-pres',
  templateUrl: './dynamic-header-pres.component.html',
  styleUrls: [ './dynamic-header-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicHeaderPresComponent implements AfterContentInit {
  @Input() videoPath: string;

  constructor() { }

  ngAfterContentInit() {
    const playVideo = () => (document.getElementById('vid') as HTMLVideoElement).play();
    try {
      const promise = playVideo();

      if (promise !== undefined) {
        promise
          .then(() => setTimeout(() => playVideo(), 5000))
          .catch(() => setTimeout(() => playVideo(), 5000));
      }
    } catch (e) {
      setTimeout(() => playVideo(), 5000);
    }
  }

}
