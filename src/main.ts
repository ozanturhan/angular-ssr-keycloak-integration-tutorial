import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const initOptions = {
  url: 'http://http://ec2-18-218-213-65.us-east-2.compute.amazonaws.com:8080/auth', realm: 'keycloak-demo', clientId: 'angular-test-app'
};

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
