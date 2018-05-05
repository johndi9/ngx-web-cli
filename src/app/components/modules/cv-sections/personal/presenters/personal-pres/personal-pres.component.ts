import { Component, Input } from '@angular/core';
import { InfoInt } from '../../../../../../interfaces/cv/info/info.int';
import { InterestInt } from '../../../../../../interfaces/cv/interest/interest.int';
import { SkillInt } from '../../../../../../interfaces/cv/skill/skill.int';

@Component({
  selector: 'app-personal-pres',
  templateUrl: './personal-pres.component.html',
  styleUrls: [ './personal-pres.component.scss' ]
})
export class PersonalPresComponent {
  @Input() info: InfoInt;
  @Input() skillSets: SkillInt[];
  @Input() interests: InterestInt[];
  @Input() aboutMe: string[];
}
