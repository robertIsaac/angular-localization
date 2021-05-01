import { LocalizeParser, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { Routes } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { makeStateKey, StateKey, TransferState } from '@angular/platform-browser';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';

export class LocalizeBrowserLoader extends LocalizeParser {
  private translateService: TranslateService;
  private LocalLocation: Location;
  private localizeRouterSettings: LocalizeRouterSettings;

  constructor(
    translateService: TranslateService,
    location: Location,
    settings: LocalizeRouterSettings,
    private data: any,
  ) {
    super(translateService, location, settings);
    this.translateService = translateService;
    this.LocalLocation = location;
    this.localizeRouterSettings = settings;
  }

  public load(routes: Routes): Promise<any> {
    return new Promise((resolve: any) => {
      this.locales = this.data.locales;
      this.prefix = this.data.prefix;
      this.init(routes).then(resolve);
    });
  }
}

export function localizeBrowserLoaderFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
  httpClient: HttpClient,
  transferState: TransferState,
): LocalizeParser {
  const key: StateKey<number> = makeStateKey<number>(
    'transfer-locales',
  );
  const data = transferState.get(key, null);
  if (data) {
    return new LocalizeBrowserLoader(translate, location, settings, data);
  } else {
    return new LocalizeRouterHttpLoader(
      translate,
      location,
      settings,
      httpClient,
    );
  }
}
