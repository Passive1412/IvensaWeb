import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

// import { AccountService } from '../services';
import { Account, Role } from '../../../core/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() backLink: string[];

  Role = Role;

  title: string;
  isMenuCollapsed: boolean;

  constructor(
    private routerLink: Router,
    public translate: TranslateService,
     // public account: Account
  ) {
    // this.account = account;
    this.title = 'Ivensa';
    this.isMenuCollapsed = true;
    this.backLink = [''];
    translate.addLangs(['en', 'da', 'ge', 'se']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|da/) ? browserLang : 'en');
    // this.accountService.account.subscribe((x) => (this.account = x));
  }

  onBack(): void {
    this.routerLink.navigate(this.backLink, {
      queryParamsHandling: 'preserve',
    });
  }

  ngOnInit(): void {}

  logout(): void {
    // this.accountService.logout();
  }

  onOptionsSelected(value: string) {
    console.log('the selected value is ' + value);
  }
}
