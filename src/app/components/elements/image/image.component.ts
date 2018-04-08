import { ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ImageEnum } from '../../../enum/image/image.enum';
import { ImageInt } from '../../../interfaces/image/image.int';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: [ './image.component.scss' ]
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
    if (changes[ 'image' ] && changes[ 'image' ].previousValue !== changes[ 'image' ].currentValue) {
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
    downloadingImage.onerror = () => this.initLoad(this.getDefaultNoImage(this.errorImage));
  }

  private getDefaultNoImage(noImage: ImageInt): ImageInt {
    return noImage || {
      src: {
        large: './assets/images/orig/no-image.jpg',
        thumbnail: './assets/images/thumb/no-image.jpg',
      },
    };
  }
}
