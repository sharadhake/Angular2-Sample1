import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SeasonchampionsComponent } from '../seasonchampions/seasonchampions.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'season/:year/:driverCode',
    component: SeasonchampionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
