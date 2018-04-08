import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { CurriculumActionTypes } from '../../enum/state/cv-action-types.enum';
import { CurriculumInt } from '../../interfaces/cv/curriculum.int';
import { LoadCV, LoadCVFail, LoadCVSuccess } from './cv.actions';

@Injectable()
export class CurriculumEffects {
  @Effect()
  loadAvailabilities$: Observable<Action> = this._actions$.pipe(
    ofType<LoadCV>(CurriculumActionTypes.LOAD_CV),
    switchMap(() => {
      const url = 'https://raw.githubusercontent.com/johndi9/PersonalCV/master/curriculum/personal-cv.json';
      return fetch(url).then(data => data.json())
        .then((cv: CurriculumInt) => new LoadCVSuccess(cv))
        .catch(error => new LoadCVFail(error));
    })
  );

  constructor(private _actions$: Actions) {}
}
