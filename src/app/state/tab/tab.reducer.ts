import { TabActionTypes } from '../../enum/state/tab-action-types.enum';
import { TAB_OPTIONS } from '../../enum/tab/tab-options.enum';
import { SelectionInt } from '../../interfaces/selection/selection.int';
import { TabActions } from './tab.actions';


export function getDefaultState(): SelectionInt<TAB_OPTIONS> {
  return { id: TAB_OPTIONS.PERSONAL_INFO };
}

export function reducer(state: SelectionInt<TAB_OPTIONS> = getDefaultState(), action: TabActions): SelectionInt<TAB_OPTIONS> {
  switch (action.type) {
    case TabActionTypes.SELECT_TAB: {
      return { ...state, id: action.payload };
    }

    default: { return state; }
  }
}
