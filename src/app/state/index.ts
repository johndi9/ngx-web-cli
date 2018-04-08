import { ActionReducerMap } from '@ngrx/store';
import { TAB_OPTIONS } from '../enum/tab-options.enum';
import { CurriculumInt } from '../interfaces/cv/curriculum.int';
import { SelectionInt } from '../interfaces/selection/selection.int';
import { XhrStateInt } from '../interfaces/xhr-state/xhr-state.int';
import { reducer as cvReducer } from './cv/cv.reducer';
import { reducer as tabReducer } from './tab/tab.reducer';

export interface State {
  cv: XhrStateInt<CurriculumInt>;
  tab: SelectionInt<TAB_OPTIONS>;
}

export const reducers: ActionReducerMap<State> = {
  cv: cvReducer,
  tab: tabReducer,
};
