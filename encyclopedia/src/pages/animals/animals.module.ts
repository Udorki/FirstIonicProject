import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalsPage } from './animals';
import { AnimalsService } from '../../providers/animals-service';
import { AnimalsModalPage } from './animals-modal';

@NgModule({
  declarations: [
    AnimalsPage,
    AnimalsModalPage
  ],
  imports: [
    IonicPageModule.forChild(AnimalsPage),
  ],
  providers: [
    AnimalsService
  ],
  entryComponents: [
    AnimalsModalPage
  ]
})
export class AnimalsPageModule {}
