import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-pres',
  templateUrl: './logo-pres.component.html',
  styleUrls: [ './logo-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoPresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
