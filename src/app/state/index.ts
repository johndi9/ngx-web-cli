import { ActionReducerMap } from '@ngrx/store';
import { CurriculumInt } from '../interfaces/cv/curriculum.int';
import { XhrStateInt } from '../interfaces/xhr-state/xhr-state.int';
import { reducer as cvReducer } from './cv/cv.reducer';

export interface State {
  cv: XhrStateInt<CurriculumInt>;
}

export const reducers: ActionReducerMap<State> = {
  cv: cvReducer,
};
