import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// Imports para el enrutamiento en la config
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
