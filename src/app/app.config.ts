import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LUCIDE_ICONS, Search } from 'lucide-angular/src/icons';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LUCIDE_ICONS,
      useValue: {
        Search,
      },
    },
  ],
};
