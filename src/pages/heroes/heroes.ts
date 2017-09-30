import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { prettyLabels } from '../../assets/prettynames';
import { HelpersProvider } from '../../providers/helpers/helpers';
import { DetailsPage } from '../details/details'


/**
 * Generated class for the HeroesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html',
})
export class HeroesPage {
  heroesData: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public helper: HelpersProvider) {
    this.heroesData = this.navParams.data.first;
    this.helper.dataType = this.navParams.data.second;
  }
  goToDetails(heroName, statType){
    console.log(heroName);
    this.navCtrl.push(DetailsPage, this.heroesData.stats[statType][heroName]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroesPage');
    // console.log(this.heroesData);
    // console.log(this.helper.dataType);
    console.log(this.helper.dataType);
  }

}
