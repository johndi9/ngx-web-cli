import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material/dialog/typings/dialog-ref';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TAB_OPTIONS } from '../../../enum/tab/tab-options.enum';
import { getHomeStateFromUrl } from '../../../helpers/url.helper';
import { CvService } from '../../../services/cv/cv.service';
import { ModalService } from '../../../services/modal/modal.service';
import { TabService } from '../../../services/tab/tab.service';
import { CvModalContComponent } from '../../modules/cv-modal/containers/cv-modal-cont/cv-modal-cont.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  TAB_OPTIONS = TAB_OPTIONS;
  private dialogRef: MatDialogRef<CvModalContComponent>;
  private subscriptions: Subscription[] = [];

  constructor(private cvService: CvService, public tabService: TabService, public modalService: ModalService,
              public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.cvService.loadCurriculum();
    this.updateStateFromUrl(this.router.url);
    this.subscriptions.push(
      this.modalService.modal$.subscribe(modal =>
        Promise.resolve(null).then(() => this.manageModal(modal.id, this.router.url))),
      this.router.events.subscribe((nav) => {
        if (nav instanceof NavigationStart) { this.updateStateFromUrl(nav.url); }
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  private updateStateFromUrl(url: string): void {
    const { tab, modal } = getHomeStateFromUrl(url);
    this.tabService.selectTab(tab);
    this.modalService.openModal(modal);
  }

  private manageModal(id: number, url: string): void {
    if (id) {
      this.dialogRef = this.openModal(id, url);
    } else {
      if (this.dialogRef) { this.dialogRef.close(); }
      this.dialogRef = null;
    }
  }

  private openModal(id: number, url: string): MatDialogRef<CvModalContComponent> {
    return this.dialog.open(CvModalContComponent, {
      height: '100vh',
      width: '100vw',
      maxWidth: '100vw',
      closeOnNavigation: true,
      hasBackdrop: false,
      data: { ...getHomeStateFromUrl(url), modal: id }
    });
  }
}
