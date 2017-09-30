import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { prettyLabels } from '../../assets/prettynames';
import { HelpersProvider } from '../../providers/helpers/helpers';

/**
 * Generated class for the AchievementsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-achievements-details',
  templateUrl: 'achievements-details.html',
})
export class AchievementsDetailsPage {
  achievementsData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public helper: HelpersProvider) {
    this.achievementsData = this.navParams.data.first;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AchievementsDetailsPage');
    console.log(this.achievementsData);
  }

}
