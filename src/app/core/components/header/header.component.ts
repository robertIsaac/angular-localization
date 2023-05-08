import { Component, inject } from '@angular/core';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateModule } from '@ngx-translate/core';
import { NgFor } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterLink, CollapseModule, RouterLinkActive, BsDropdownModule, NgFor, TranslateModule, LocalizeRouterModule],
})
export class HeaderComponent {
  private readonly localizeRouterService = inject(LocalizeRouterService);
  private readonly router = inject(Router);

  protected readonly locales = this.localizeRouterService.parser.locales;

  protected isCollapsed = true;
  protected currentUrl = '';

  constructor() {
    this.setCurrentUrl();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.setCurrentUrl();
    });
  }

  private setCurrentUrl(): void {
    this.currentUrl = this.router.url
      .replace('/' + this.localizeRouterService.parser.currentLang, '')
      .split('?')[0];
  }
}
