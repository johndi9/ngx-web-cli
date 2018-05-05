import { Component, Input } from '@angular/core';
import { ContactInt } from '../../../../../../interfaces/cv/contact/contact.int';
import { LocationInt } from '../../../../../../interfaces/cv/location/location.int';
import { SocialInt } from '../../../../../../interfaces/cv/social/social.int';

@Component({
  selector: 'app-contact-cont',
  templateUrl: './contact-cont.component.html',
  styleUrls: [ './contact-cont.component.scss' ]
})
export class ContactContComponent {
  @Input() contact: ContactInt;
  @Input() location: LocationInt;
  @Input() social: SocialInt;
}
