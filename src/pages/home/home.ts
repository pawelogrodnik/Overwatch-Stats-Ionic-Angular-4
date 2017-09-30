import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { RegionsPage } from '../regions/regions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DataProvider]
})
export class HomePage {

  regions: any[];
  myjsondata: any = {};
  platforms: any[];
  player: any = {};
  constructor(public navCtrl: NavController, private dataService: DataProvider) {
    this.initPlatforms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }
  displayError(err) {
    console.log(err.status);
    console.log('Złe dane...')
  }
  searchPlayer() {
    let current = this.player;
    this.dataService.fetchData(current.name, current.platform, 'stats').subscribe(
      (data) => {
        this.goToRegions(data);
      },
      (err) => this.displayError(err)
    );
  }


  initPlatforms() {
    this.platforms = [
      {
        name: 'Xbox Live',
        value: 'xbl',
      },
      {
        name: 'PSN',
        value: 'psn',
      },
      {
        name: 'PC',
        value: 'pc',
      }

    ]
  }
  goToRegions(data) {
    this.navCtrl.push(RegionsPage, data);
  }


}
