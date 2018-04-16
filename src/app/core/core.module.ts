import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ApiService} from './services/api.service';
import {ChampionsService} from './services/champions.service';
import { UtilityService } from '../core/services/utility.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';


@NgModule({
    imports: [
      CommonModule
    ],
    providers: [
      { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
      ApiService,
      ChampionsService,
      UtilityService
    ],
    declarations: []
  })
  export class CoreModule { }
