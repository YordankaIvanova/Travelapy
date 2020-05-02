import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ExtraOptions, Routes } from '@angular/router';

import { TravelJournalComponent } from './pages/travel-journal/travel-journal.page';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { JournalContentComponent } from './components/journal-content/journal-content.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes = [
  {
    path: 'travel-journal',
    component: TravelJournalComponent,
  },
  {
    path: '',
    redirectTo: 'travel-journal',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    TravelJournalComponent, 
    SideBarComponent, 
    JournalContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, routerOptions),
  ],
  exports: [ JournalContentComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class TravelJournalModule { }
