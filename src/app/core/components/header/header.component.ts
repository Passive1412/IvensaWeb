import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() backLink: string[];

  title: string;
  isMenuCollapsed: boolean;

  constructor(private routerLink: Router, public translate: TranslateService) {
    this.title = 'Ivensa';
    this.isMenuCollapsed = true;
    this.backLink = [''];
    translate.addLangs(['da', 'en', 'ge', 'se']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|da/) ? browserLang : 'en');
  }

  onBack(): void {
    this.routerLink.navigate(this.backLink, {
      queryParamsHandling: 'preserve',
    });
  }

  ngOnInit(): void {}

  onOptionsSelected(value: string): void {
    console.log('the selected value is ' + value);
  }
}
