import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-pres',
  templateUrl: './footer-pres.component.html',
  styleUrls: [ './footer-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterPresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
