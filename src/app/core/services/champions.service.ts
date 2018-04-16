import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ChampionsService {

  constructor(private apiService: ApiService) { }

  getF1WorldChampions(yearDifference, offsetDifference):  Observable<[string]>  {
    return this.apiService.get(`f1/driverstandings/1.json?limit=${yearDifference}&offset=${offsetDifference}`)
    .pipe(map(data => {
      // Update the currentUser observable
      return data.MRData.StandingsTable.StandingsLists;
    }));
  }

  getSeasonChampions(year): Observable<[string]> {
    return this.apiService.get(`f1/${year}/results/1.json`)
    .pipe(map(data => {
      // Update the currentUser observable
      console.log(data);
      return data.MRData.RaceTable.Races;
    }));
  }
}
