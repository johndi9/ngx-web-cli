import { inject, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../helpers/tests.helper';
import { TabService } from './tab.service';

describe('TabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(getTestingModuleConfig());
  });

  it('should be created', inject([ TabService ], (service: TabService) => {
    expect(service).toBeTruthy();
  }));
});
