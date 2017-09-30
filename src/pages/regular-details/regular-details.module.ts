import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegularDetailsPage } from './regular-details';

@NgModule({
  declarations: [
    RegularDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(RegularDetailsPage),
  ],
})
export class RegularDetailsPageModule {}
