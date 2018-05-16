import { inject, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { CvService } from './cv.service';

describe('CvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      providers: [ CvService, Store ]
    });
  });

  it('should be created', inject([ CvService ], (service: CvService) => {
    expect(service).toBeTruthy();
  }));
});
