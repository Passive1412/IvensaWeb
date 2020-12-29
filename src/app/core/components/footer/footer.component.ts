import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}


  //   // keep refs to subscription to be abble to unsubscribe later
  // // (NOTE: unless you want to be notified when an item is revealed by WOW,
  // //  you absolutely don't need this line and related, for the library to work
  // // only the call to `this.wowService.init()` at some point is necessary

  // constructor(private router: Router, private wowService: NgwWowService, private wowSubscription: Subscription) {
  //   this.router.events.filter
  //     // .filter((event: any) => event instanceof NavigationEnd)
  //     // .subscribe(() => {
  //     //   // Reload WoW animations when done navigating to page,
  //     //   // but you are free to call it whenever/wherever you like
  //     //   this.wowService.init();
  //     // });
  // }

  // ngOnInit() {
  //   // you can subscribe to WOW observable to react when an element is revealed
  //   this.wowSubscription = this.wowService.itemRevealed$.subscribe(
  //     (item: HTMLElement) => {
  //       // do whatever you want with revealed element
  //     }
  //   );
  // }

  // ngOnDestroy() {
  //   // unsubscribe (if necessary) to WOW observable to prevent memory leaks
  //   this.wowSubscription.unsubscribe();
  // }
}
