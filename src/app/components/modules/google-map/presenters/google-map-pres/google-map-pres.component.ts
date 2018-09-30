import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map-pres',
  templateUrl: './google-map-pres.component.html',
  styleUrls: [ './google-map-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleMapPresComponent implements OnInit {
  lat = 40.475703;
  lng = -3.687738;

  constructor() { }

  ngOnInit() {
  }

}
