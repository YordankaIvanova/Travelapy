import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchToolsComponent } from '@modules/search/components/search-tools/search-tools.component';
import { SearchResultsComponent } from '@modules/search/components/search-results/search-results.component';
import { PopularDestinationsComponent } from '@modules/search/components/popular-destinations/popular-destinations.component';


@NgModule({
  declarations: [SearchToolsComponent, SearchResultsComponent, PopularDestinationsComponent],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
