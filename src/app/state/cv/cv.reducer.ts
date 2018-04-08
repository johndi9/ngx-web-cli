import { CurriculumActionTypes } from '../../enum/cv-action-types.enum';
import { LoadState } from '../../enum/loading-state.enum';
import { CurriculumInt } from '../../interfaces/cv/curriculum.int';
import { XhrStateInt } from '../../interfaces/xhr-state/xhr-state.int';
import { CvActions } from './cv.actions';


export function getDefaultState(): XhrStateInt<CurriculumInt> {
  return {
    load: LoadState.NONE,
    error: null,
    content: null
  };
}

export function reducer(state: XhrStateInt<CurriculumInt> = getDefaultState(), action: CvActions): XhrStateInt<CurriculumInt> {
  switch (action.type) {
    case CurriculumActionTypes.LOAD_CV: {
      return { ...state, load: LoadState.LOADING };
    }

    case CurriculumActionTypes.LOAD_CV_SUCCESS: {
      return { ...state, content: action.payload, load: LoadState.LOADED };
    }

    case CurriculumActionTypes.LOAD_CV_ERROR: {
      return { ...state, load: LoadState.ERROR, error: action.payload };
    }

    default: { return state; }
  }
}
