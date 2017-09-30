import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { prettyLabels } from '../../assets/prettynames';
import { HelpersProvider } from '../../providers/helpers/helpers';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  details: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public helper: HelpersProvider) {
    this.details = this.navParams.data;
    console.log(this.details);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
