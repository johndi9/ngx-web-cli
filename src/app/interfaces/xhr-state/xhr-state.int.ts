import { LoadState } from '../../enum/loading-state.enum';

export interface XhrStateInt<T> {
  load: LoadState;
  error: string | null;
  content: T | null;
}
