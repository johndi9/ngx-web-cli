import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map-pres',
  templateUrl: './google-map-pres.component.html',
  styleUrls: [ './google-map-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleMapPresComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
