// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// AgGrid Modules
import { AgGridModule } from '@ag-grid-community/angular';

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Environment
import { environment } from 'src/environments/environment';

// NG Modules
import {
  NgbDateAdapter,
  NgbDateNativeUTCAdapter,
  NgbModule,
} from '@ng-bootstrap/ng-bootstrap';

// Core Modules

// Page Modules
import { HomeComponent, NotFoundComponent } from './pages/english/';
import { HeaderComponent } from './core/components';
import { BannerComponent } from './core/components/banner/banner.component';
import { FooterComponent } from './core/components/footer/footer.component';
// import { BannerComponent } from './pages/danish/banner/banner.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeaderComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    //NavigationComponent,
    //BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [
    { provide: ErrorHandler, useClass: environment.errorHandler },
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    { provide: NgbDateAdapter, useClass: NgbDateNativeUTCAdapter },

    //CanActivateGuardService
    //Authservice
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
