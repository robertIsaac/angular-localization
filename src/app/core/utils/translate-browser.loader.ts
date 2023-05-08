import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

export function translateBrowserLoaderFactory(
  httpClient: HttpClient,
): TranslateHttpLoader {
  return new TranslateHttpLoader(httpClient, `${environment.appUrl}assets/i18n/`);
}
