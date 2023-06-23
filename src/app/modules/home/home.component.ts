import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import LocomotiveScroll  from 'locomotive-scroll';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  @ViewChild('data-scroll-container') public element!: ElementRef;
  scroll!: any;


  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

    // console.log('====================================');
    // console.log(this.element.nativeElement);
    // console.log('====================================');
    // this.scroll = new LocomotiveScroll({
    //   el: this.element.nativeElement.innerHTML,
    //   smooth: true,
    //   getSpeed:true
    // });
  }

  ngAfterViewInit() {
    console.log('====================================');
    console.log(this.element.nativeElement);
    console.log('====================================');
    this.scroll = new LocomotiveScroll({
      el: this.element.nativeElement,
      smooth: true,
      getSpeed: true
    });
  //   gsap.registerPlugin(MotionPathPlugin);

  //   const textPath = document.querySelector('#animatedText');

  //   gsap.to(textPath, {
  //     duration: 5,
  //     repeat: -1,
  //     motionPath: {
  //       path: '#motionPath',
  //       align: '#motionPath',
  //       autoRotate: true
  //     }
  //   });
  // }
}
}
