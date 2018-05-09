import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CvService } from '../../../services/cv/cv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private cvService: CvService) { }

  ngOnInit() {
    this.cvService.loadCurriculum();
  }
}
