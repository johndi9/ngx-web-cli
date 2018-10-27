import { AfterViewInit, ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-header-pres',
  templateUrl: './dynamic-header-pres.component.html',
  styleUrls: [ './dynamic-header-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicHeaderPresComponent implements AfterViewInit {
  @Input() videoPath: string;

  constructor() { }

  ngAfterViewInit() {
    const playVideo = () => (document.getElementById('vid') as HTMLVideoElement).play();
    const promise = playVideo();

    if (promise !== undefined) {
      promise
        .then(_ => {})
        .catch(error => {
          console.log(error);
          setTimeout(() => playVideo(), 1500);
        });
    }
  }

}
