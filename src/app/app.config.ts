import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateBrowserLoaderFactory } from './core/utils/translate-browser.loader';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { localizeBrowserLoaderFactory } from './core/utils/localize-browser.loader';
import { Location } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withDisabledInitialNavigation } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withDisabledInitialNavigation()),
    provideClientHydration(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: translateBrowserLoaderFactory,
          deps: [HttpClient],
        },
      }), LocalizeRouterModule.forRoot(routes, {
        parser: {
          provide: LocalizeParser,
          useFactory: localizeBrowserLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
      },
      initialNavigation: true,
    })),
    provideAnimations(),
    provideHttpClient(),
  ],
};
