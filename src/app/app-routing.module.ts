import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

// import {  } from './core';

import { HomeComponent, NotFoundComponent } from './pages/english';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '*', redirectTo: '' },
  { path: '**', component: NotFoundComponent },
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
