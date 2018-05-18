import { inject, TestBed } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { getTestingModuleConfig } from '../../helpers/tests.helper';
import { MonthsDurationPipe } from './months-duration.pipe';

describe('MonthsDurationPipe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(getTestingModuleConfig());
  });

  it('create an instance', inject([ TranslateService ], (translateService) => {
    const pipe = new MonthsDurationPipe(translateService);
    expect(pipe).toBeTruthy();
  }));
});
