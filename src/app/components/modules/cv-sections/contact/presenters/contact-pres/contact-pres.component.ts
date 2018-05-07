import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { ContactInt } from '../../../../../../interfaces/cv/contact/contact.int';
import { LocationInt } from '../../../../../../interfaces/cv/location/location.int';
import { SocialInt } from '../../../../../../interfaces/cv/social/social.int';
import { GoogleMapsService } from '../../../../../../services/google-maps/google-maps.service';

@Component({
  selector: 'app-contact-pres',
  templateUrl: './contact-pres.component.html',
  styleUrls: [ './contact-pres.component.scss' ]
})
export class ContactPresComponent implements AfterViewInit {
  @Input() contact: ContactInt;
  @Input() location: LocationInt;
  @Input() social: SocialInt;

  constructor(private _googleMapsService: GoogleMapsService,
              private _element: ElementRef) {
  }

  ngAfterViewInit() {
    (<any>window).googleMapsReady = this.onMapsReady.bind(this);
    document.getElementsByTagName('head')[ 0 ].appendChild(this.createScriptElement());
  }

  private createScriptElement(): HTMLScriptElement {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = this._googleMapsService.getGoogleMapsUrl();

    return script;
  }

  private onMapsReady() {
    this._googleMapsService.createMap(this._element.nativeElement.querySelector('.map'),
      `${this.location.city} ${this.location.country}`);
  }
}
