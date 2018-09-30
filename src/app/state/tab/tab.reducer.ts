import { TabActionTypes } from '../../enum/state/tab-action-types.enum';
import { TAB_OPTIONS } from '../../enum/tab/tab-options.enum';
import { TabStateInt } from '../../interfaces/tab/tab-state.int';
import { TabActions } from './tab.actions';


export function getDefaultState(): TabStateInt<TAB_OPTIONS> {
  return { id: TAB_OPTIONS.PERSONAL_INFO };
}

export function reducer(state: TabStateInt<TAB_OPTIONS> = getDefaultState(), action: TabActions): TabStateInt<TAB_OPTIONS> {
  switch (action.type) {
    case TabActionTypes.SELECT_TAB: {
      return { ...state, id: action.payload.id };
    }

    default: { return state; }
  }
}
