import { inject, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../helpers/tests.helper';
import { CvService } from './cv.service';

describe('CvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(getTestingModuleConfig());
  });

  it('should be created', inject([ CvService ], (service: CvService) => {
    expect(service).toBeTruthy();
  }));
});
