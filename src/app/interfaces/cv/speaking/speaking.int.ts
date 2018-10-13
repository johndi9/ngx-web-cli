import { ImageUrlInt } from '../../image/image.int';

export interface SpeakingInt {
  title: string;
  role: string;
  event: string;
  location: string;
  date: Date;
  url: string;
  logo: ImageUrlInt;
  highlights: string[];
}
