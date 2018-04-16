import { Component, OnInit } from '@angular/core';
import { ChampionsService, UtilityService } from '../core/services/';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private championsService: ChampionsService,
    private utilityService: UtilityService
  ) { }
  championsList = [];
  fromSeason = 2005;
  toSeason = 2015;
  f1StartedYear = 1950;
  yearDifference = this.utilityService.calculateYearDifference(this.fromSeason, this.toSeason) + 1;
  offsetDifference = this.utilityService.calculateYearDifference(this.f1StartedYear, this.fromSeason);

  ngOnInit() {
    this.getWorldChampions();
  }

  getWorldChampions() {
    return this.championsService.getF1WorldChampions(this.yearDifference, this.offsetDifference)
    .subscribe(list => {
      this.championsList = this._prepareDriverData(list);
    });
  }

  _prepareDriverData(championsList) {
     const driverDetails = [];
     let champion = '',
        driver = '';
      for (champion in championsList) {
        if (championsList.hasOwnProperty(champion)) {
          const season = championsList[champion].season,
                driverdtls = championsList[champion].DriverStandings;
            for (driver in driverdtls) {
              if (driverdtls.hasOwnProperty(driver)) {
                const driverInfo = driverdtls[driver].Driver,
                      points = driverdtls[driver].points,
                      nationality = driverInfo.nationality,
                      driverId = driverInfo.code,
                      dob = driverInfo.dateOfBirth,
                      constructorName = driverdtls[driver].Constructors[driver].name,
                      driverName = driverInfo.familyName + ' ' + driverInfo.givenName;
                driverDetails.push({'season': season, 'points': points, 'driverId': driverId, 'name': driverName, 'nationality': nationality, 'dob': dob, constructorName: constructorName});
              }
            }
        }
      }
    return driverDetails;
  }
}
