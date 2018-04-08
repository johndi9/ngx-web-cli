import { PublisherInt } from './publisher/publisher.int';

export interface WritingInt {
  title: string;
  flavor: string;
  date: Date;
  publisher: PublisherInt;
  url: string;
  logo: string;
  author: string[];
  summary: string;
}
