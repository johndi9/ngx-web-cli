import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/Subscription';

@Pipe({
  name: 'monthsDuration'
})
export class MonthsDurationPipe implements PipeTransform, OnDestroy {
  private readonly MONTH_IN_YEAR: number = 12;
  private labels: Object = {};
  private subscriptions: Subscription[] = [];

  constructor(private _translateService: TranslateService) {
    this.subscriptions.push(
      _translateService.get('labels').subscribe((labels: Object) => this.labels = labels)
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  transform(numberOfMonths: number): string {
    return this.getYearsString(numberOfMonths) + this.getMonthsString(numberOfMonths);
  }

  getYearsString(years): string {
    const numYears = Math.floor(years / this.MONTH_IN_YEAR);
    const getKey = y => y > 1 ? 'years' : 'year';
    return numYears > 0 ? `${numYears} ${this.labels[ getKey(numYears) ]} ` : '';
  }

  getMonthsString(months: number): string {
    const numMonths = Math.floor(months % this.MONTH_IN_YEAR) + 1;
    const getKey = m => m > 1 ? 'months' : 'month';
    return numMonths > 0 ? `${numMonths} ${this.labels[ getKey(numMonths) ]} ` : '';
  }
}
