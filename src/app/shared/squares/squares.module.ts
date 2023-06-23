import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SquaresComponent } from './squares.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SquaresComponent],
  exports: [SquaresComponent]
})
export class SquaresModule { }
