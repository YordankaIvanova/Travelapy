import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'trv-search-tools',
  templateUrl: './search-tools.component.html',
  styleUrls: ['./search-tools.component.less']
})
export class SearchToolsComponent implements OnInit {
  // TODO: move this to a config file and change the values
  ratings = [ 'One star', 'Two stars', 'Three stars', 'Four stars', 'Five stars'];
  prices = [ 'Most expensive', 'Expensive', 'Normal', 'Low'];
  desires = [ 'Most desirable'];

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchField: [''],
      ratingSelect: [''],
      priceSelect: [''],
      desireSelect: ['']
    });
  }

  ngOnInit(): void {
  }

}
