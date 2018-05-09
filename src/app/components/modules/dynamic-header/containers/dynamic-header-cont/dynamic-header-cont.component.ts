import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-header-cont',
  templateUrl: './dynamic-header-cont.component.html',
  styleUrls: [ './dynamic-header-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicHeaderContComponent {
  readonly videoPath = '/assets/videos/bg-min.mp4';

  constructor() {}
}
