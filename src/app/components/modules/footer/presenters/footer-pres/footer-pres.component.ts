import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-pres',
  templateUrl: './footer-pres.component.html',
  styleUrls: [ './footer-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterPresComponent {
  @Input() name: string;

  private today: number = Date.now();
}
