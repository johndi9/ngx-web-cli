import { Action } from '@ngrx/store';
import { ModalActionTypes } from '../../enum/modal-action-types.enum';

export class OpenModal implements Action {
  readonly type = ModalActionTypes.OPEN_MODAL;

  constructor(public payload: number) {}
}

export class CloseModal implements Action {
  readonly type = ModalActionTypes.CLOSE_MODAL;

  constructor() {}
}

export type ModalActions = OpenModal | CloseModal;
