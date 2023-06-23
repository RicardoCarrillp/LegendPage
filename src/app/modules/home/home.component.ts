import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import 'jarallax';
declare var jarallax: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('data-scroll-container') public element!: ElementRef;
  scroll!: any;
  statement!:any;

  constructor(private elementRef: ElementRef, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {


  }
  setVideo() {
    jarallax(document.querySelectorAll('.logo'), {
      speed: 0.2,
      videoSrc: 'https://vimeo.com/groups/freehd/videos/153749650'
    });
  }

  changeStatement() {
    this.statement = true;
    this.changeDetector.detectChanges();
    this.setVideo();
  }

}
