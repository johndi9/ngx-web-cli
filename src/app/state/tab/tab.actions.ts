import { Action } from '@ngrx/store';
import { TabActionTypes } from '../../enum/state/tab-action-types.enum';
import { TAB_OPTIONS } from '../../enum/tab/tab-options.enum';
import { TabStateInt } from '../../interfaces/tab/tab-state.int';

export class SelectTab implements Action {
  readonly type = TabActionTypes.SELECT_TAB;

  constructor(public payload: TabStateInt<TAB_OPTIONS>) {}
}

export type TabActions = SelectTab;
