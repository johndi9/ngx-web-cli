import { DateRangeModule } from './date-range.module';

describe('DateRangeModule', () => {
  let dateRangeModule: DateRangeModule;

  beforeEach(() => {
    dateRangeModule = new DateRangeModule();
  });

  it('should create an instance', () => {
    expect(dateRangeModule).toBeTruthy();
  });
});
