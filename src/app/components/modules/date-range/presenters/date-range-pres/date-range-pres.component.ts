import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-range-pres',
  templateUrl: './date-range-pres.component.html',
  styleUrls: [ './date-range-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangePresComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
