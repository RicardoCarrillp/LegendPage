import { Component, OnInit } from '@angular/core';
import { SquaresData } from 'src/app/global/squaresData';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss']
})
export class SquaresComponent implements OnInit {
  imageList!: any;

  constructor() { }

  ngOnInit() {
    this.imageList = SquaresData;
  }

}
