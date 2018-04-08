import { CertificateInt } from './certificate/certificate.int';
import { ContactInt } from './contact/contact.int';
import { EducationInt } from './education/education.int';
import { EmployInt } from './employ/employ.int';
import { InfoInt } from './info/info.int';
import { InterestInt } from './interest/interest.int';
import { LanguageInt } from './language/language.int';
import { LocationInt } from './location/location.int';
import { ProjectInt } from './project/project.int';
import { SeminarInt } from './seminar/seminar.int';
import { SkillInt } from './skill/skill.int';
import { SocialInt } from './social/social.int';
import { SpeakingInt } from './speaking/speaking.int';
import { WritingInt } from './writing/writing.int';

export interface CurriculumInt {
  name: string;
  aboutMe: string[];
  lastUpdate: Date;
  info: InfoInt;
  contact: ContactInt;
  location: LocationInt;
  projects: ProjectInt[];
  social: SocialInt[];
  writing: WritingInt[];
  speaking: SpeakingInt[];
  certificates: CertificateInt[];
  seminars: SeminarInt[];
  languages: LanguageInt[];
  interests: InterestInt[];
  employment: {
    summary: string,
    history: EmployInt[]
  };
  education: {
    history: EducationInt[]
  };
  skills: {
    sets: SkillInt[]
  };
}
