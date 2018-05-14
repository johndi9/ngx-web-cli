import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { parseStringToDate } from '../../../../../helpers/date.helper';

@Component({
  selector: 'app-date-range-pres',
  templateUrl: './date-range-pres.component.html',
  styleUrls: [ './date-range-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DateRangePresComponent implements OnInit {
  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() calculateDuration: boolean;
  @Input() showOnlyYear: boolean;

  dateFormat: string;
  parseStringToDate = parseStringToDate;

  private readonly YEAR_MONTH_FORMAT: string = 'y/MM';
  private readonly YEAR_FORMAT: string = 'y';

  ngOnInit(): void {
    this.dateFormat = this.showOnlyYear ? this.YEAR_FORMAT : this.YEAR_MONTH_FORMAT;
  }
}
