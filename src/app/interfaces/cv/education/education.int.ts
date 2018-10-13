import { ImageUrlInt } from '../../image/image.int';

export interface EducationInt {
  institution: string;
  title: string;
  location: string;
  url: string;
  logo: ImageUrlInt;
  start: number;
  end: number;
  grade: string;
  summary: string;
  curriculum: string[];
}
