import { Component, OnInit } from '@angular/core';
import { LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  locales = this.localizeRouterService.parser.locales;

  constructor(
    private localizeRouterService: LocalizeRouterService,
  ) { }

  ngOnInit(): void {
  }

  changeLang(locale: string): void {
    this.localizeRouterService.changeLanguage(locale);
  }
}
