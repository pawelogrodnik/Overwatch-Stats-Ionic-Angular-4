import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AchievementsDetailsPage } from './achievements-details';

@NgModule({
  declarations: [
    AchievementsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AchievementsDetailsPage),
  ],
})
export class AchievementsDetailsPageModule {}
