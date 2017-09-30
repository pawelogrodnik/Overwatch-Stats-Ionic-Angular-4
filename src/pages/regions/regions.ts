import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { prettyLabels } from '../../assets/prettynames';
import { SummaryPage } from '../summary/summary';



/**
 * Generated class for the RegionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regions',
  templateUrl: 'regions.html',
})
export class RegionsPage {
  regions: any;
  regionKeys: any;
  // quickplayStats: any = {};
  // data = this.data;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.regions = this.navParams.data;
    // console.log(this.regions);
    // this.quickplayStats = this.regions.any.stats.quickplay.game_stats;
    this.regionKeys = Object.keys(this.regions);
  }
  checkContent(region) {
    // console.log('REGION FUNC ' + region);
    // console.log(region);
    return !(region == null);
  }

  goToSummary(region) {
    console.log('region');
    console.log(region);
    console.log('pushniecie ponizszych danych do summary page');
    console.log(this.regions[region]);
    this.navCtrl.push(SummaryPage, this.regions[region]);
  }

  prettify(name: string) {
    return prettyLabels[name] || ("NAME NOT FOUND OR NOT LOADED: " + name)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegionsPage');
  }
  generateArray(obj) {
    return Object.keys(obj).map((key) => {
      return {
        key: key, value: obj[key]
      }
    });
  }
}
