import { Component, Input } from '@angular/core';
import { CertificateInt } from '../../../../../../interfaces/cv/certificate/certificate.int';
import { EducationInt } from '../../../../../../interfaces/cv/education/education.int';
import { LanguageInt } from '../../../../../../interfaces/cv/language/language.int';
import { SeminarInt } from '../../../../../../interfaces/cv/seminar/seminar.int';

@Component({
  selector: 'app-education-cont',
  templateUrl: './education-cont.component.html',
  styleUrls: [ './education-cont.component.scss' ]
})
export class EducationContComponent {
  @Input() educations: EducationInt[];
  @Input() certificates: CertificateInt[];
  @Input() seminars: SeminarInt[];
  @Input() languages: LanguageInt[];
}
