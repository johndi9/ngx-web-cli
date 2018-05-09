import { Router } from '@angular/router';
import { TAB_OPTIONS } from '../enum/tab/tab-options.enum';
import { getUrlTab } from './tab.helper';

export const newTabNavigation = (router: Router, tab: TAB_OPTIONS) => router.navigate([ '/' + getUrlTab(tab) ]);
