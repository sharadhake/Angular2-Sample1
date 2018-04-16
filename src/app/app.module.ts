import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { SeasonchampionsComponent } from './seasonchampions/seasonchampions.component';
import {
  FooterComponent,
  HeaderComponent,
  SharedModule
} from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SeasonchampionsComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
