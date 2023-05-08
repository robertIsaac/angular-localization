import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { Location } from '@angular/common';
import { localizeBrowserLoaderFactory } from './app/core/utils/localize-browser.loader';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { translateBrowserLoaderFactory } from './app/core/utils/translate-browser.loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule, routes } from './app/app-routing.module';
import { bootstrapApplication, BrowserModule, TransferState } from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, AppRoutingModule, CollapseModule.forRoot(), BsDropdownModule.forRoot(), TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: translateBrowserLoaderFactory,
        deps: [HttpClient, TransferState],
      },
    }), LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeBrowserLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient, TransferState],
      },
      initialNavigation: true,
    })),
    provideAnimations(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
  .catch(err => console.error(err));
