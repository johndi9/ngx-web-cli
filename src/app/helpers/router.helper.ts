import { Router } from '@angular/router';
import { TAB_OPTIONS } from '../enum/tab/tab-options.enum';
import { getUrlTab } from './tab.helper';
import { getParsedHomeUrl } from './url.helper';

export const navigateFromTab = (router: Router, tab: TAB_OPTIONS) => router.navigate([ '/' + getUrlTab(tab) ]);

export const navigateAfterModalClosed = (router: Router) => router.navigate([ getParsedHomeUrl(router.url) ]);
