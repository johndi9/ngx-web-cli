import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { getUrlWithModalOpened } from '../../../../../helpers/url.helper';

@Component({
  selector: 'app-cv-card-cont',
  templateUrl: './cv-card-cont.component.html',
  styleUrls: [ './cv-card-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvCardContComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() thumbImg: string;

  constructor(private router: Router) {}

  openModal(id: number) {
    this.router.navigate([ getUrlWithModalOpened(this.router.url, id) ]);
  }
}
