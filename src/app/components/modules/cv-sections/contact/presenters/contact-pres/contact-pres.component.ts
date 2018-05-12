import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ContactInt } from '../../../../../../interfaces/cv/contact/contact.int';
import { LocationInt } from '../../../../../../interfaces/cv/location/location.int';
import { SocialInt } from '../../../../../../interfaces/cv/social/social.int';

@Component({
  selector: 'app-contact-pres',
  templateUrl: './contact-pres.component.html',
  styleUrls: [ './contact-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPresComponent {
  @Input() contact: ContactInt;
  @Input() location: LocationInt;
  @Input() social: SocialInt;

  lat = 51.678418;
  lng = 7.809007;
}
