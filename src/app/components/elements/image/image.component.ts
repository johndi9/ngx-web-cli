import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import path from 'ramda/es/path';
import { ImageEnum } from '../../../enum/image/image.enum';
import { ImageInt, ImageUrlInt } from '../../../interfaces/image/image.int';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: [ './image.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit, OnChanges {
  @Input() image: ImageInt;
  @Input() errorImage?: ImageInt;

  currentSrc: ImageUrlInt;
  hasBlurEffect = true;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    const imageObj = this.image || this.getDefaultNoImage(this.errorImage);
    this.initLoad(imageObj);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (path([ 'image', 'previousValue', 'src', 'large', 'path' ], changes) !==
      path([ 'image', 'currentValue', 'src', 'large', 'path' ], changes)) {
      this.initLoad(this.image || this.getDefaultNoImage(this.errorImage));
    }
  }

  private initLoad(image: ImageInt) {
    this.currentSrc = image.src[ ImageEnum.THUMBNAIL ];
    this.loadImageWithFormat(image.src[ ImageEnum.LARGE ], 'webp');
  }

  private loadImageWithFormat(src: ImageUrlInt, formatToOverWrite?: string) {
    const downloadingImage: HTMLImageElement = new Image();
    const format = formatToOverWrite || src.format;
    downloadingImage.src = `${src.path}.${format}`;
    downloadingImage.onload = () => {
      if(!downloadingImage.height) {
        this.loadImageWithFormat(src);
        return;
      }
      this.currentSrc = {...src, format};
      this.hasBlurEffect = false;
      this.changeDetector.markForCheck();
    };
  }

  private getDefaultNoImage(noImage: ImageInt): ImageInt {
    return noImage || {
      src: {
        large: {
          path: './assets/images/orig/common/no-image',
          format: 'png'
        },
        thumbnail: {
          path: './assets/images/thumb/common/no-image',
          format: 'png'
        },
      },
    };
  }
}
