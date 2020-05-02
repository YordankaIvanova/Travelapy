import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@modules/home/pages/home/home.page';
import { SearchComponent } from '@modules/search/pages/search/search.page';
import { TravelJournalComponent } from './modules/travel-journal/pages/travel-journal/travel-journal.page';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'travel-journal',
    component: TravelJournalComponent,
  //   children: [
  //     // {
  //     //   path: 'destinations', // child route path
  //     //   component: ChildAComponent // child route component that the router renders
  //     // },
  //     {
  //       path: 'new-destination',
  //       component: ChildBComponent
  //     }
  // ] 
},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
