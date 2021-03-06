import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-cv-card-grid-pres',
  templateUrl: './cv-card-grid-pres.component.html',
  styleUrls: [ './cv-card-grid-pres.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvCardGridPresComponent {
  @Input() items: any[];
  @Input() cardTemplate: TemplateRef<any>;
}
