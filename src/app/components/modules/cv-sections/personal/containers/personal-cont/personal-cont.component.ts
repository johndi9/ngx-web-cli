import { Component, Input } from '@angular/core';
import { InfoInt } from '../../../../../../interfaces/cv/info/info.int';
import { InterestInt } from '../../../../../../interfaces/cv/interest/interest.int';
import { SkillInt } from '../../../../../../interfaces/cv/skill/skill.int';

@Component({
  selector: 'app-personal-cont',
  templateUrl: './personal-cont.component.html',
  styleUrls: [ './personal-cont.component.scss' ]
})
export class PersonalContComponent {
  @Input() info: InfoInt;
  @Input() skillSets: SkillInt[];
  @Input() interests: InterestInt[];
  @Input() aboutMe: string[];
}
