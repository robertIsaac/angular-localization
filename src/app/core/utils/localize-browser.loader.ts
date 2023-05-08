import { LocalizeParser, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { environment } from '../../../environments/environment';

export function localizeBrowserLoaderFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
  httpClient: HttpClient,
): LocalizeParser {
  return new LocalizeRouterHttpLoader(
    translate,
    location,
    settings,
    httpClient,
    `${environment.appUrl}assets/locales.json`,
  );
}
