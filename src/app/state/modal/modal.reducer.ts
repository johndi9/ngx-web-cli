import { ModalActionTypes } from '../../enum/modal-action-types.enum';
import { SelectionInt } from '../../interfaces/selection/selection.int';
import { ModalActions } from './modal.actions';

export function getDefaultState(): SelectionInt<number | null> {
  return { id: null };
}

export function reducer(state: SelectionInt<number | null> = getDefaultState(), action: ModalActions): SelectionInt<number | null> {
  switch (action.type) {
    case ModalActionTypes.OPEN_MODAL: {
      return { ...state, id: action.payload };
    }

    case ModalActionTypes.CLOSE_MODAL: {
      return { ...state, id: null };
    }

    default: { return state; }
  }
}
