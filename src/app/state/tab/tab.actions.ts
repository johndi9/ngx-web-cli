import { Action } from '@ngrx/store';
import { TabActionTypes } from '../../enum/tab-action-types.enum';
import { TAB_OPTIONS } from '../../enum/tab-options.enum';

export class SelectTab implements Action {
  readonly type = TabActionTypes.SELECT_TAB;

  constructor(public payload: TAB_OPTIONS) {}
}

export type TabActions = SelectTab;
