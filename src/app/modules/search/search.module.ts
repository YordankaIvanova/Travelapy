import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchToolsComponent } from '@modules/search/components/search-tools/search-tools.component';
import { SearchResultsComponent } from '@modules/search/components/search-results/search-results.component';
import { PopularDestinationsComponent } from '@modules/search/components/popular-destinations/popular-destinations.component';
import { SearchComponent } from './pages/search/search.page';


@NgModule({
  declarations: [
    SearchToolsComponent, 
    SearchResultsComponent, 
    PopularDestinationsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ SearchComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class SearchModule { }
