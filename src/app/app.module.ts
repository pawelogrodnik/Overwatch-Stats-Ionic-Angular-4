import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule} from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegionsPage } from '../pages/regions/regions';
import { SummaryPage } from '../pages/summary/summary';
import { HeroesPage } from '../pages/heroes/heroes';
import { DetailsPage } from '../pages/details/details';
import { RegularDetailsPage } from '../pages/regular-details/regular-details';
import { AchievementsDetailsPage} from '../pages/achievements-details/achievements-details';





import { DataProvider } from '../providers/data/data';
import { HelpersProvider } from '../providers/helpers/helpers';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegionsPage,
    SummaryPage,
    HeroesPage,
    DetailsPage,
    RegularDetailsPage,
    AchievementsDetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegionsPage,
    SummaryPage,
    HeroesPage,
    DetailsPage,
    RegularDetailsPage,
    AchievementsDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    HelpersProvider,
    HelpersProvider
  ]
})
export class AppModule {}
