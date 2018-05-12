import { TAB_OPTIONS } from '../enum/tab/tab-options.enum';
import { TabInt } from '../interfaces/tab/tab.int';

export const getTabs = () => ([
  { id: 0, iconName: 'fingerprint' },
  { id: 1, iconName: 'important_devices' },
  { id: 2, iconName: 'business_center' },
  { id: 3, iconName: 'school' },
  { id: 4, iconName: 'description' },
  { id: 5, iconName: 'email' }
].map(getTabWithDefaults)) as TabInt[];

export const getUrlTabs = () => ({
  [ TAB_OPTIONS.PERSONAL_INFO ]: 'personal',
  [ TAB_OPTIONS.PROJECTS ]: 'projects',
  [ TAB_OPTIONS.EMPLOYS ]: 'employers',
  [ TAB_OPTIONS.EDUCATION ]: 'education',
  [ TAB_OPTIONS.OTHER_INFO ]: 'other',
  [ TAB_OPTIONS.CONTACT ]: 'contact'
});

export const getUrlTab = (tab: TAB_OPTIONS) => getUrlTabs()[ tab ];

export const getUrlTabKey = (tabString: string) => TAB_OPTIONS[ Object.keys(getUrlTabs())
  .find(key => getUrlTabs()[ key ] === tabString) ] as TAB_OPTIONS;

export const getTabWithDefaults = (tab: Partial<TabInt>) =>
  ({ iconName: null, text: null, active: null, ...tab }) as TabInt;
