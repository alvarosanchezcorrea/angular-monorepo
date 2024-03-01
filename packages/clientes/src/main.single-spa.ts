import { enableProdMode, NgZone } from '@angular/core';
import { Router, NavigationStart, provideRouter } from '@angular/router';
import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { environment } from './environments/environment';
import { singleSpaPropsSubject } from './single-spa/single-spa-props';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './app/empty-route/empty-route.component';
import { isAuthenticated } from '@ventas/utils';

if (environment.production) {
  enableProdMode();
}

if(!isAuthenticated()) {
  window.location.href = '/';
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: singleSpaProps => {
    singleSpaPropsSubject.next(singleSpaProps);
    const options = {
      providers: [
        {provide:APP_BASE_HREF, useValue: '/'},
        getSingleSpaExtraProviders(),
        provideRouter([{path: '', component: EmptyRouteComponent}]),
      ]
    };
    return bootstrapApplication(AppComponent, options);
  },
  template: '<app-clientes/>',
  Router,
  NavigationStart,
  NgZone,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
