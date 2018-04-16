import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const bootstrapApp = platformBrowserDynamic().bootstrapModule(AppModule);

// Logging bootstrap information

bootstrapApp.then(success => console.log('Bootstrap Success'))
.catch(err => console.log(err));
