import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from '@modules/home/components/carousel/carousel.component';
import { IntroComponent } from '@modules/home//components/intro/intro.component';
import { HomeComponent } from '@modules/home/pages/home/home.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CarouselComponent, IntroComponent, HomeComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [ HomeComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HomeModule { }
