import { Component, Input } from '@angular/core';
import { SpeakingInt } from '../../../../../../interfaces/cv/speaking/speaking.int';
import { WritingInt } from '../../../../../../interfaces/cv/writing/writing.int';

@Component({
  selector: 'app-other-info-pres',
  templateUrl: './other-info-pres.component.html',
  styleUrls: [ './other-info-pres.component.scss' ]
})
export class OtherInfoPresComponent {
  @Input() writings: WritingInt[];
  @Input() speakings: SpeakingInt[];
}
