import { inject, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MonthsDurationPipe } from './months-duration.pipe';

describe('MonthsDurationPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TranslateModule.forRoot({}) ],
      providers: [ TranslateService ]
    });
  });

  it('create an instance', inject([ TranslateService ], (translateService) => {
    const pipe = new MonthsDurationPipe(translateService);
    expect(pipe).toBeTruthy();
  }));
});
