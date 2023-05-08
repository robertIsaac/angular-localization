import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';

export function initializeDirectionFactory() {
  const initializeDirectionService = inject(InitializeDirectionService);
  initializeDirectionService.initializeDirection();
  return () => undefined;
}

@Injectable({providedIn: 'root'})
class InitializeDirectionService {
  translateService = inject(TranslateService);
  document = inject(DOCUMENT);

  initializeDirection() {
    this.translateService.stream('DIR').subscribe(dir => {
      this.directionChanged(dir);
    });
  }

  private directionChanged(dir: string): void {
    const htmlTag = this.document.getElementsByTagName('html')[0] as HTMLHtmlElement;
    htmlTag.dir = dir === 'rtl' ? 'rtl' : 'ltr';
    this.changeCssFile(dir);
  }

  private changeCssFile(dir: string): void {
    const headTag = this.document.getElementsByTagName('head')[0] as HTMLHeadElement;
    const existingLink = this.document.getElementById('bootstrap-css') as HTMLLinkElement;
    const bundleName = dir === 'rtl' ? 'bootstrap.rtl.min.css' : 'bootstrap.min.css';

    if (existingLink) {
      existingLink.href = bundleName;
    } else {
      const newLink = this.document.createElement('link');
      newLink.rel = 'stylesheet';
      newLink.id = 'bootstrap-css';
      newLink.href = bundleName;
      headTag.appendChild(newLink);
    }
  }

}
