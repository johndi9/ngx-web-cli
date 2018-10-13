export interface ImageInt {
  alt?: string;
  cssClass?: string;
  src: {
    large: ImageUrlInt;
    thumbnail?: ImageUrlInt;
  };
}

export interface ImageUrlInt {
  path: string;
  format: string;
}
