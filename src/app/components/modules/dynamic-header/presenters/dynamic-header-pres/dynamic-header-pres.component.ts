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
    const getVideo = () => (document.getElementById('vid') as HTMLVideoElement);
    const promise = getVideo().play();

    if (promise !== undefined) {
      promise
        .then(_ => {})
        .catch(error => {
          console.log(error);
          setTimeout(() => getVideo().play(), 1500);
        });
    }
  }

}
