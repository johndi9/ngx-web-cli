import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-cont',
  templateUrl: './footer-cont.component.html',
  styleUrls: [ './footer-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterContComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
