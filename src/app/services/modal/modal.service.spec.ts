import { inject, TestBed } from '@angular/core/testing';
import { getTestingModuleConfig } from '../../helpers/tests.helper';
import { ModalService } from './modal.service';

describe('ModalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule(getTestingModuleConfig());
  });

  it('should be created', inject([ ModalService ], (service: ModalService) => {
    expect(service).toBeTruthy();
  }));
});
