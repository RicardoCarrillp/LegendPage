import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgxMarqueeModule } from 'ngx-marquee';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgxMarqueeModule,
    ],
  declarations: [HomeComponent]
})
export class HomeModule { }
