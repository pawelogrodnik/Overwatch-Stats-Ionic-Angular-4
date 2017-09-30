import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { prettyLabels } from '../../assets/prettynames';

/*
  Generated class for the HelpersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HelpersProvider {
  dataType: string = 'quickplay';  
  showHide: boolean;
  constructor() {
    console.log('Hello HelpersProvider Provider');
    this.showHide = true;
  }
  prettyTime(time: number) {
    return time < 1 && time != 0 ? Math.round((time *= 60 * 100) / 100) + ' min' : time + ' hours';
  }
  prettify(name: string) {
    return prettyLabels[name] || ("NAME ERR: " + name)
  }
  generateArray(obj) {
    return Object.keys(obj).map((key) => {
      return {
        key: key, value: obj[key]
      }
    });
  }
}
