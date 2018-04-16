import { Injectable } from '@angular/core';

@Injectable()
export class UtilityService {

  constructor() { }

  calculateYearDifference(fromSeason, toSeason) {
    const fromSeasonYear = new Date(fromSeason.toString()),
        toSeasonYear = new Date(toSeason.toString()),
        m = toSeasonYear.getMonth() - fromSeasonYear.getMonth();
    let yearDiff = toSeasonYear.getFullYear() - fromSeasonYear.getFullYear();

    if (m < 0 || (m === 0 && toSeasonYear.getDate() < fromSeasonYear.getDate())) {
        yearDiff--;
    }

    return yearDiff;
  }
}
