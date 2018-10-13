import { ImageUrlInt } from '../../image/image.int';
import { PublisherInt } from './publisher/publisher.int';

export interface WritingInt {
  title: string;
  flavor: string;
  date: Date;
  publisher: PublisherInt;
  url: string;
  logo: ImageUrlInt;
  author: string[];
  summary: string;
}
