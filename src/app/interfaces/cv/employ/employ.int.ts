import { ImageUrlInt } from '../../image/image.int';

export interface EmployInt {
  id: number;
  employer: string;
  location: string;
  url: number;
  download: number;
  logo: ImageUrlInt;
  backgroundColor: string;
  color: string;
  position: number;
  summary: string;
  start: Date;
  end: Date;
  keywords: string[];
  highlights: string[];
}
