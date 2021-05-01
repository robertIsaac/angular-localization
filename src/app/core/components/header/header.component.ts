import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  locales = ['en', 'fr', 'ar'];

  constructor(
    private translateService: TranslateService,
  ) { }

  ngOnInit(): void {
  }

  changeLanguage(locale: string): void {
    this.translateService.use(locale);
  }
}
