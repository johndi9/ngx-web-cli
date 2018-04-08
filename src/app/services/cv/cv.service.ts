import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { CurriculumInt } from '../../interfaces/cv/curriculum.int';
import { XhrStateInt } from '../../interfaces/xhr-state/xhr-state.int';
import { State } from '../../state';
import { LoadCV } from '../../state/cv/cv.actions';

@Injectable()
export class CvService {
  constructor(private store: Store<State>) {
    this._cv$ = store.select('cv');
  }

  private _cv$: Observable<XhrStateInt<CurriculumInt>>;

  get cv$(): Observable<XhrStateInt<CurriculumInt>> {
    return this._cv$;
  }

  loadCurriculum() {
    this.store.dispatch(new LoadCV());
  }
}
