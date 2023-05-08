import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { translateBrowserLoaderFactory } from './core/utils/translate-browser.loader';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { localizeBrowserLoaderFactory } from './core/utils/localize-browser.loader';
import { Location } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, CollapseModule.forRoot(), BsDropdownModule.forRoot(), TranslateModule.forRoot({
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
    provideHttpClient(withInterceptorsFromDi()),
  ],
};
