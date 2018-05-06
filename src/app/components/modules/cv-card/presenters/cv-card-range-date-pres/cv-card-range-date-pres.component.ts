import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-card-range-date-pres',
  templateUrl: './cv-card-range-date-pres.component.html',
  styleUrls: [ './cv-card-range-date-pres.component.scss' ]
})
export class CvCardRangeDatePresComponent implements OnInit {
  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() calculateDuration: boolean;
  @Input() showOnlyYear: boolean;

  dateFormat: string;

  private readonly YEAR_MONTH_FORMAT: string = 'y/MM';
  private readonly YEAR_FORMAT: string = 'y';

  ngOnInit(): void {
    this.dateFormat = this.showOnlyYear ? this.YEAR_FORMAT : this.YEAR_MONTH_FORMAT;
  }
}
