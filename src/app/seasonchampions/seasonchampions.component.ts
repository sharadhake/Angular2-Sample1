import { Component, OnInit } from '@angular/core';
import { ChampionsService } from '../core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-seasonchampions',
  templateUrl: './seasonchampions.component.html',
  styleUrls: ['./seasonchampions.component.css']
})
export class SeasonchampionsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private championsService: ChampionsService,
    private location: Location
  ) { }

  championsList: Array<string> = [];
  driverCode = false;
  year = +this.route.snapshot.paramMap.get('year');
  ngOnInit() {
    this.getSeasonChampions();
  }

  getSeasonChampions() {
    return this.championsService.getSeasonChampions(this.year)
    .subscribe(list => {
      this.championsList = this._prepareList(list);
    });
  }

  goBack() {
    this.location.back();
  }
  _prepareList(championsList) {
    const driverDetails = [];
    let champion = '',
       driver = '';
     for (champion in championsList) {
       if (championsList.hasOwnProperty(champion)) {
         const raceName = championsList[champion].raceName,
               driverdtls = championsList[champion].Results;
           for (driver in driverdtls) {
             if (driverdtls.hasOwnProperty(driver)) {
               const driverInfo = driverdtls[driver].Driver,
                     laps = driverdtls[driver].laps,
                     nationality = driverInfo.nationality,
                     driverId = driverInfo.driverId,
                     raceDate = championsList[champion].date,
                     constructorName = driverdtls[driver].Constructor.name,
                     driverName = driverInfo.familyName + ' ' + driverInfo.givenName,
                     isChampion = (driverInfo.code === this.route.snapshot.paramMap.get('driverCode'));
              driverDetails.push({'season': raceName, 'laps': laps, 'driverId': driverId, 'name': driverName, 'nationality': nationality, 'raceDate': raceDate, constructorName: constructorName, isChampion: isChampion});
             }
           }
       }
     }
   return driverDetails;
 }
}
