import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  private baseUrl = 'https://owapi.net/api/v3/u';
  regions: any[];
  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }
  fetchData(battleTag, platform, dataType) {
    return this.http.get(`${this.baseUrl}/${battleTag}/blob?platform=${platform}`).map((res:Response) => res.json());
  }
}