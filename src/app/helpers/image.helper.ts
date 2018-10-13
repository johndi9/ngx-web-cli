import { ImageInt, ImageUrlInt } from '../interfaces/image/image.int';

export const getImage = ({ img, cssClass }: { img: ImageUrlInt, cssClass: {} }) =>
  ({
    src: {
      large: {
        path: `/assets/images/orig/${img.path}`,
        format: img.format,
      },
      thumbnail: {
        path: `/assets/images/thumb/${img.path}`,
        format: img.format,
      },
    },
    ...(cssClass ? { cssClass } : {})
  }) as ImageInt;
