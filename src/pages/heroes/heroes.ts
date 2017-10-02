import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { prettyLabels } from '../../assets/prettynames';
import { HelpersProvider } from '../../providers/helpers/helpers';
import { DetailsPage } from '../details/details'
import { ToastController } from 'ionic-angular';



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
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public helper: HelpersProvider, public toastCtrl: ToastController) {
    this.heroesData = this.navParams.data.first;
    this.helper.dataType = this.navParams.data.second;
  }
  goToDetails(heroName, statType) {
    console.log(heroName);
    console.log(this.heroesData.stats[statType]);
    if ((heroName in this.heroesData.stats[statType])){
      this.navCtrl.push(DetailsPage, this.heroesData.stats[statType][heroName]);      
    } else {
      this.displayToastErr(heroName);
    }
  }
  displayToastErr(heroName) {
    let toast = this.toastCtrl.create({
      message: `No details for ${heroName}`,
      duration: 4000,
      position: 'bottom'
    });

    toast.present(toast);

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HeroesPage');
  }

}
