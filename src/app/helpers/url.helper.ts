import { TAB_OPTIONS } from '../enum/tab/tab-options.enum';
import { getUrlTabKey } from './tab.helper';

export interface UrlHomeInterface {
  tab: TAB_OPTIONS;
  modal: number;
}

export const getHomeStateFromUrl = (url: string) => {
  const params = [ ...(url.split('/') || []).slice(1, 3) ];
  return {
    tab: getUrlTabKey(params[ 0 ]),
    ...(params[ 1 ] ? { modal: Number(params[ 1 ]) } : {})
  } as UrlHomeInterface;
};

export const getUrlWithModalOpened = (url: string, id: number) => {
  const params = url.split('/') || [];
  return `/${params[1]}/${id}`;
};
