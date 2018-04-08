import { Action } from '@ngrx/store';
import { CurriculumInt } from '../../interfaces/cv/curriculum.int';
import { CurriculumActionTypes } from '../../enum/cv-action-types.enum';

export class LoadCV implements Action {
  readonly type = CurriculumActionTypes.LOAD_CV;

  constructor() {}
}

export class LoadCVSuccess implements Action {
  readonly type = CurriculumActionTypes.LOAD_CV_SUCCESS;

  constructor(public payload: CurriculumInt) {}
}

export class LoadCVFail implements Action {
  readonly type = CurriculumActionTypes.LOAD_CV_ERROR;

  constructor(public payload: any) {}
}

export type CvActions = LoadCV | LoadCVSuccess | LoadCVFail;
