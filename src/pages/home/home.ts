import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { RegionsPage } from '../regions/regions';
import { ToastController, LoadingController } from 'ionic-angular';

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
  loaderbool: boolean = true;
  loader: any;
  constructor(public navCtrl: NavController, private dataService: DataProvider, public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    this.initPlatforms();
  }
  loadData() {
    this.loader = this.createLoader();
  }
  createLoader() {
    return this.loadingCtrl.create({
      content: "Loading profile data...",
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad');
  }

  displayError(err) {
    let toast = this.toastCtrl.create({
      message: 'Something went wrong. Looks like the input data is incorrect...',
      duration: 4000,
      position: 'bottom'
    });

    toast.present();

  }
  searchPlayer() {
    let current = this.player;
    this.loadData();
    this.dataService.fetchData(current.name, current.platform, 'stats').subscribe(
      (data) => {
        this.loader.dismiss();
        this.goToRegions(data);
      },
      (err) => {
        this.loader.dismiss();
        this.displayError(err)
      }
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
