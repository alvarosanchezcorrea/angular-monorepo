import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation, withEnabledBlockingInitialNavigation } from '@angular/router';

import { routes } from './app.routes';
import { getSingleSpaExtraProviders } from 'single-spa-angular';
import { APP_BASE_HREF } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes,withHashLocation(), withEnabledBlockingInitialNavigation()), 
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    },
    getSingleSpaExtraProviders(),
  ]
};
