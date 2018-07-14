import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {path} from 'ramda/es/path';
import { ImageEnum } from '../../../enum/image/image.enum';
import { ImageInt } from '../../../interfaces/image/image.int';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: [ './image.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImageComponent implements OnInit, OnChanges {
  @Input() image: ImageInt;
  @Input() errorImage?: ImageInt;

  currentSrc: string;
  hasBlurEffect = true;

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit() {
    const imageObj = this.image || this.getDefaultNoImage(this.errorImage);
    this.initLoad(imageObj);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (path([ 'image', 'previousValue', 'src', 'large' ], changes) !== path([ 'image', 'currentValue', 'src', 'large' ], changes)) {
      const imageObj = this.image || this.getDefaultNoImage(this.errorImage);
      this.initLoad(imageObj);
    }
  }

  private initLoad(image: ImageInt) {
    this.currentSrc = image.src[ ImageEnum.THUMBNAIL ];
    this.loadNewImage(image.src[ ImageEnum.LARGE ]);
  }

  private loadNewImage(newSrc: string) {
    const downloadingImage: HTMLImageElement = new Image();
    downloadingImage.src = newSrc;
    downloadingImage.onload = () => {
      this.currentSrc = newSrc;
      this.hasBlurEffect = false;
      this.changeDetector.markForCheck();
    };
    // TODO: Set no-image.jpg, commented due to the tests
    // downloadingImage.onerror = () => this.initLoad(this.getDefaultNoImage(this.errorImage));
  }

  private getDefaultNoImage(noImage: ImageInt): ImageInt {
    return noImage || {
      src: {
        large: './assets/images/orig/common/no-image.png',
        thumbnail: './assets/images/thumb/common/no-image.png',
      },
    };
  }
}
