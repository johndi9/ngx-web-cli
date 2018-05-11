import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { getStateFromUrl } from '../../../helpers/url.helper';
import { CvService } from '../../../services/cv/cv.service';
import { TabService } from '../../../services/tab/tab.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  constructor(private cvService: CvService, public tabService: TabService, private router: Router) { }

  ngOnInit() {
    this.cvService.loadCurriculum();
    this.updateStateFromUrl(this.router.url);
    this.router.events.subscribe((nav) => {
      if (nav instanceof NavigationStart) { this.updateStateFromUrl(nav.url); }
    });
  }

  private updateStateFromUrl(url: string): void {
    const { tab, modal } = getStateFromUrl(url);
    this.tabService.selectTab(tab);
  }
}
