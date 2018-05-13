import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { TAB_OPTIONS } from '../../../../../enum/tab/tab-options.enum';
import { getEmployerFromCv, getEmployerFromProject, getProjectFromCv } from '../../../../../helpers/cv.helper';
import { navigateAfterModalClosed } from '../../../../../helpers/router.helper';
import { UrlHomeInterface } from '../../../../../helpers/url.helper';
import { CvService } from '../../../../../services/cv/cv.service';

@Component({
  selector: 'app-cv-modal-cont',
  templateUrl: './cv-modal-cont.component.html',
  styleUrls: [ './cv-modal-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvModalContComponent {
  getEmployerFromCv = getEmployerFromCv;
  getEmployerFromProject = getEmployerFromProject;
  getProjectFromCv = getProjectFromCv;
  TAB_OPTIONS = TAB_OPTIONS;

  constructor(@Inject(MAT_DIALOG_DATA) public data: UrlHomeInterface, public cvService: CvService, private router: Router) { }

  closeModal() {
    navigateAfterModalClosed(this.router);
  }

}
