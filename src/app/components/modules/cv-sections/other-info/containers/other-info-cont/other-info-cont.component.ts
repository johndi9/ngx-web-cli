import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SpeakingInt } from '../../../../../../interfaces/cv/speaking/speaking.int';
import { WritingInt } from '../../../../../../interfaces/cv/writing/writing.int';

@Component({
  selector: 'app-other-info-cont',
  templateUrl: './other-info-cont.component.html',
  styleUrls: [ './other-info-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OtherInfoContComponent {
  @Input() writings: WritingInt[];
  @Input() speakings: SpeakingInt[];
}
