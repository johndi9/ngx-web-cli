import { TAB_OPTIONS } from '../enum/tab/tab-options.enum';
import { getUrlTabKey } from './tab.helper';

export interface UrlHomeInterface {
  tab: TAB_OPTIONS;
  modal: number;
}

export const getHomeStateFromUrl = (url: string) => {
  const params = url.split('/') || [];
  return {
    tab: getUrlTabKey(params[ 1 ]),
    ...(params[ 2 ] ? { modal: Number(params[ 2 ]) } : {})
  } as UrlHomeInterface;
};

export const getParsedHomeUrl = (url: string, modal?: number) => {
  const params = url.split('/') || [];
  return modal ? `/${params[ 1 ]}/${modal}` : `/${params[ 1 ]}`;
};
