import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { navigateAfterModalClosed } from '../../../../../helpers/router.helper';
import { ModalService } from '../../../../../services/modal/modal.service';
import { TabService } from '../../../../../services/tab/tab.service';

@Component({
  selector: 'app-cv-modal-cont',
  templateUrl: './cv-modal-cont.component.html',
  styleUrls: [ './cv-modal-cont.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvModalContComponent implements OnInit {

  constructor(public tabService: TabService, public modalService: ModalService, private router: Router) { }

  ngOnInit() {
  }

  closeModal() {
    navigateAfterModalClosed(this.router);
  }

}
