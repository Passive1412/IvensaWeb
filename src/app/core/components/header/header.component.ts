import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  filter,
  map,
  pairwise,
  share,
  throttleTime
} from 'rxjs/operators';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss'],
// })
// export class HeaderComponent implements AfterViewInit {

@Component({
  selector: 'app-header',
  template: `<ng-content></ng-content>`,
  styles: [
    `
      :host {
        position: fixed;
        top: 0;
        width: 100%;
      }
    `
  ],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({ opacity: 0, transform: 'translateY(-100%)' })
      ),
      state(
        VisibilityState.Visible,
        style({ opacity: 1, transform: 'translateY(0)' })
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class HeaderComponent implements AfterViewInit {
  private isVisible = true;

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }

  ngAfterViewInit() {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const goingUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const goingDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    goingUp$.subscribe(() => (this.isVisible = true));
    goingDown$.subscribe(() => (this.isVisible = false));
  }
}



// import {
//   Component,
//   OnInit,
//   Input,
//   HostListener,
//   ElementRef,
//   AfterViewInit,
// } from '@angular/core';

// import { Router } from '@angular/router';

// import { TranslateService } from '@ngx-translate/core';
// import { fromEvent } from 'rxjs';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss'],
// })
// export class HeaderComponent implements AfterViewInit {
//   private isVisible = true;

//   ngAfterViewInit() {
//     const scroll$ = fromEvent(window, 'scroll').pipe(
//       throttleTime(10),
//       map(() => window.pageYOffset),
//       pairwise(),
//       map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
//       distinctUntilChanged(),
//       share()
//     );

//     const scrollUp$ = scroll$.pipe(
//       filter(direction => direction === Direction.Up)
//     );

//     const scrollDown = scroll$.pipe(
//       filter(direction => direction === Direction.Down)
//     );

//     scrollUp$.subscribe(() => (this.isVisible = true));
//     scrollDown.subscribe(() => (this.isVisible = false));
//   }
// }
// }


// @Input() backLink: string[];

// title: string;
// isMenuCollapsed: boolean;
// switchCondition: string;
// test: boolean;

// up = false;
// passed = false;

// constructor(
//   private routerLink: Router,
//   public translate: TranslateService,
//   public el: ElementRef
// ) {
//   this.title = 'Ivensa';
//   this.isMenuCollapsed = true;
//   this.switchCondition = 'case1';
//   this.test = true;
//   this.backLink = [''];
//   translate.addLangs(['da', 'en', 'ge', 'se']);
//   translate.setDefaultLang('en');

//   const browserLang = translate.getBrowserLang();
//   translate.use(browserLang.match(/en|da/) ? browserLang : 'en');
// }

// onBack(): void {
//   this.routerLink.navigate(this.backLink, {
//     queryParamsHandling: 'preserve',
//   });
// }

// ngOnInit(): void {}

// onOptionsSelected(value: string): void {
//   console.log('the selected value is ' + value);
// }

// ngAfterViewInit() {
//   const scroll$ = fromEvent(window, 'scroll');
// }


// @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
//   const verticalOffset =
//     window.pageYOffset ||
//     document.documentElement.scrollTop ||
//     document.body.scrollTop ||
//     0;
//   console.log(verticalOffset);

//   if (verticalOffset - verticalOffset) {
//     this.up = true;
//   }


//   if (verticalOffset !== 0) {
//     this.test = false;
//   } else {
//     this.test = true;
//   }
//   console.log(this.test);

//   if (verticalOffset === 0) {
//     this.switchCondition = 'case1';
//   } else if (up) {
//     this.switchCondition = 'case2';
//   } else {
//     this.switchCondition = 'case3';
//   }
// }

// @HostListener('window:scroll', ['$event']) // for window scroll events
// onWindowScroll(event: any) {
//   console.log(event);
// }
// @HostListener('window:scroll', []) onWindowScroll(): void {
//   do some stuff here when the window is scrolled
//   const verticalOffset =
//     window.pageYOffset ||
//     document.documentElement.scrollTop ||
//     document.body.scrollTop ||
//     0;

//   console.log("window", window.pageYOffset );

//   console.log("docu scroll top", document.documentElement.scrollTop);

//   console.log("body scroll top", document.body.scrollTop );

//   console.log(document.documentElement.scroll);

//   if (verticalOffset === 0) {
//     this.switchCondition = 'case1';
//   } else if () {
//     this.switchCondition = 'case2';
//   } else {
//     this.switchCondition = 'case3';
//   }

//   if (verticalOffset !== 0) {
//     this.test = false;
//   } else {
//     this.test = true;
//   }
//   console.log(this.test);
// }
