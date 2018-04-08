import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-header-cont',
  templateUrl: './dynamic-header-cont.component.html',
  styleUrls: [ './dynamic-header-cont.component.scss' ]
})
export class DynamicHeaderContComponent {
  readonly videoPath = '/assets/videos/bg-min.mp4';

  constructor() {}
}
