import { ImageUrlInt } from '../../image/image.int';

export interface ProjectInt {
  id: number;
  employerId: number;
  title: string;
  category: string;
  role: string;
  url: string;
  download: string;
  logo: ImageUrlInt;
  backgroundColor: string;
  color: string;
  start: Date;
  end: Date;
  description: string;
  summary: string;
  keywords: string[];
  highlights: string[];
}
