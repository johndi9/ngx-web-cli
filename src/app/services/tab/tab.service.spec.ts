import { inject, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { TabService } from './tab.service';

describe('TabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      providers: [ TabService, Store ]
    });
  });

  it('should be created', inject([ TabService ], (service: TabService) => {
    expect(service).toBeTruthy();
  }));
});
