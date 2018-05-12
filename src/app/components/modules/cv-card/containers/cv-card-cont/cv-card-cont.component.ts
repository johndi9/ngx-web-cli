import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

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
}
