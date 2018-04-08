import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { SelectionInt } from '../../interfaces/selection/selection.int';
import { State } from '../../state';
import { CloseModal, OpenModal } from '../../state/modal/modal.actions';

@Injectable()
export class ModalService {
  constructor(private store: Store<State>) {
    this._modal$ = store.select('modal');
  }

  private _modal$: Observable<SelectionInt<number | null>>;

  get modal$(): Observable<SelectionInt<number | null>> {
    return this._modal$;
  }

  openModal(item: number) {
    this.store.dispatch(new OpenModal(item));
  }

  closeModal() {
    this.store.dispatch(new CloseModal());
  }
}
