import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { TAB_OPTIONS } from '../../enum/tab/tab-options.enum';
import { SelectionInt } from '../../interfaces/selection/selection.int';
import { State } from '../../state';
import { SelectTab } from '../../state/tab/tab.actions';

@Injectable()
export class TabService {
  constructor(private store: Store<State>) {
    this._tab$ = store.select('tab');
  }

  private _tab$: Observable<SelectionInt<TAB_OPTIONS>>;

  get tab$(): Observable<SelectionInt<TAB_OPTIONS>> {
    return this._tab$;
  }

  selectTab(tab: TAB_OPTIONS) {
    this.store.dispatch(new SelectTab(tab));
  }
}
