// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule  } from 'angular-bootstrap-md';

//
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgVerticalTimelineModule  } from 'ng-vertical-timeline';

//
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { FlexLayoutModule } from "@angular/flex-layout";

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//
import { NgwWowModule } from 'ngx-wow';

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
import { HomeComponent, NotFoundComponent } from './features/pages/english/';
import { HeaderComponent } from './core/components';
import { BannerComponent } from './core/components/banner/banner.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { TimelineComponent } from './features/components/timeline/timeline.component';
import { AboutComponent } from './features/components/about/about.component';
import { NewsComponent } from './features/components/news/news.component';
import { FeaturesComponent } from './features/components/features/features.component';
import { CameraAniComponent } from './core/components/camera-ani/camera-ani.component';

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
    TimelineComponent,
    AboutComponent,
    NewsComponent,
    FeaturesComponent,
    CameraAniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    NgVerticalTimelineModule,
    NgwWowModule,
    MDBBootstrapModule.forRoot(),
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
