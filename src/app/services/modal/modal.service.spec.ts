import { inject, TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      providers: [ ModalService, Store ]
    });
  });

  it('should be created', inject([ ModalService ], (service: ModalService) => {
    expect(service).toBeTruthy();
  }));
});
