import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import LocalePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(LocalePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    }
  ]
};
