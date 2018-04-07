import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-dynamic-header-cont',
  templateUrl: './dynamic-header-cont.component.html',
  styleUrls: [ './dynamic-header-cont.component.scss' ]
})
export class DynamicHeaderContComponent implements OnInit, OnDestroy {
  private videoPath: string;
  private subscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.subscription = this.loadVideo().subscribe(() => {
      this.videoPath = '/assets/video/bg-min.mp4';
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private loadVideo(): Observable<HTMLVideoElement> {
    return Observable.create(observer => {
      const video: HTMLVideoElement = document.createElement('video');

      video.src = this.videoPath;
      video.load();
      video.addEventListener('loadeddata', () => {
        observer.next();
        observer.complete();
      });
      video.onerror = err => observer.error(err);
    });
  }
}
