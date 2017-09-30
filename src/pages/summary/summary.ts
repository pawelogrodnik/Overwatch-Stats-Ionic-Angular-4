import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeroesPage } from '../heroes/heroes'
import { RegularDetailsPage } from '../regular-details/regular-details'
import { AchievementsDetailsPage} from '../achievements-details/achievements-details';

import { prettyLabels } from '../../assets/prettynames';
import {HelpersProvider } from '../../providers/helpers/helpers';

/**
 * Generated class for the SummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-summary',
  templateUrl: 'summary.html',
})
export class SummaryPage {
  regionData: any;
  heroes: any;
  overall: any;
  sortedArray: any[];
  heroesData: any;
  achievementsData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public helper: HelpersProvider) {
    this.regionData = this.navParams.data;
    this.achievementsData = this.regionData.achievements;
    this.heroesData = this.regionData.heroes;
    this.heroes = this.regionData.heroes.playtime;
    this.overall = this.regionData.stats;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SummaryPage');
    // console.log(this.sortedArray);
    // console.log(this.achievementsData);
  }
  goToHeroesPage(data) {
    console.log(`pushniecie ponizszych danych do heroes page`);
    console.log(this.heroesData);
    this.navCtrl.push(HeroesPage, {
      'first': this.heroesData,
      'second': data
    });

  }
  goToDetailsAchievements(data){
    this.navCtrl.push(AchievementsDetailsPage, {
      'first': this.achievementsData,
      'second': data
    })
  }
  goToDetailsOverall(data){
    this.navCtrl.push(RegularDetailsPage, {
      'first': this.overall[data],
      'second': data
    })
  }
}
