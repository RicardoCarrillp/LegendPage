import { Component, ElementRef, OnInit } from '@angular/core';
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    gsap.registerPlugin(MotionPathPlugin);

    const textPath = document.querySelector('#animatedText');

    gsap.to(textPath, {
      duration: 5,
      repeat: -1,
      motionPath: {
        path: '#motionPath',
        align: '#motionPath',
        autoRotate: true
      }
    });
  }
}
