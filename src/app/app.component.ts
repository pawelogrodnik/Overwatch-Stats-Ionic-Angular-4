import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { RegionsPage } from '../pages/regions/regions';
import { SummaryPage } from '../pages/summary/summary';
import { HeroesPage } from '../pages/heroes/heroes';
import { DetailsPage } from '../pages/details/details';
import { RegularDetailsPage } from '../pages/regular-details/regular-details';
import { AchievementsDetailsPage} from '../pages/achievements-details/achievements-details';





@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

