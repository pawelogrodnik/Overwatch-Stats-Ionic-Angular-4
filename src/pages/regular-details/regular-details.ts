import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { prettyLabels } from '../../assets/prettynames';
import { HelpersProvider } from '../../providers/helpers/helpers';

/**
 * Generated class for the RegularDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regular-details',
  templateUrl: 'regular-details.html',
})
export class RegularDetailsPage {
  gameData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public helper: HelpersProvider) {
    this.gameData = this.navParams.data.first;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegularDetailsPage');
    console.log(this.gameData);
  }

}
