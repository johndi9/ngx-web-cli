import { OtherContactInt } from './other-contact/other-contact.int';

export interface ContactInt {
  website: string;
  phone: string;
  email: string;
  other: OtherContactInt[];
}
