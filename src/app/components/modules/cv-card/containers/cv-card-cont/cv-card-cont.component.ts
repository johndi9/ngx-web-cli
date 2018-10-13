import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { getParsedHomeUrl } from '../../../../../helpers/url.helper';
import { ImageUrlInt } from '../../../../../interfaces/image/image.int';

@Component({
  selector: 'app-cv-card-cont',
  templateUrl: './cv-card-cont.component.html',
  styleUrls: [ './cv-card-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvCardContComponent {
  @Input() id: number;
  @Input() title: string;
  @Input() thumbImg: ImageUrlInt;

  constructor(private router: Router) {}

  openModal(id: number) {
    this.router.navigate([ getParsedHomeUrl(this.router.url, id) ]);
  }
}
