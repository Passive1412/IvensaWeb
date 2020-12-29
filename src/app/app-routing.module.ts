import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  NotFoundComponent,
  TeamComponent,
  RetailtechLabComponent,
  RequestDemoPageComponent,
} from './features/pages/english';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'team', component: TeamComponent },
  { path: 'retailtech-lab', component: RetailtechLabComponent },
  { path: 'request-demo-page', component: RequestDemoPageComponent },


  { path: '**', component: NotFoundComponent },
  { path: '*', redirectTo: '' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // onSameUrlNavigation: 'reload',
      // useHash: true,
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
