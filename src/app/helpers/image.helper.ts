import { ImageInt } from '../interfaces/image/image.int';

export const getImage = ({ url, cssClass }) =>
  ({
    src: { large: `/assets/images/orig/${url}`, thumbnail: `/assets/images/thumb/${url}` },
    ...(cssClass ? { cssClass } : {})
  }) as ImageInt;
