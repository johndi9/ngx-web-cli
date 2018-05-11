import { TAB_OPTIONS } from '../enum/tab/tab-options.enum';
import { getUrlTabKey } from './tab.helper';

export interface UrlHomeInterface {
  tab: TAB_OPTIONS;
  modal: number;
}

export const getStateFromUrl = (url: string) => {
  const params = [ ...(url.split('/') || []).slice(1, 2) ];
  return {
    tab: getUrlTabKey(params[ 0 ]),
    ...(params[ 1 ] ? { modal: Number(params[ 1 ]) } : {})
  } as UrlHomeInterface;
};
