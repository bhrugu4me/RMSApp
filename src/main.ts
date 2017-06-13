import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {Router} from '@angular/router';
//import { ADAL4Service } from 'adal-angular4'

//import {SecretService} from './services/secret.service';
//import {ADAL4Service} from 'adal-angular4';
//import {SecretService} from '../app/services/secret.service';


if (environment.production) {
  enableProdMode();
}
//platformBrowserDynamic(AppComponent, [AdalService, Router]);
platformBrowserDynamic().bootstrapModule(AppModule);
//platformBrowserDynamic()