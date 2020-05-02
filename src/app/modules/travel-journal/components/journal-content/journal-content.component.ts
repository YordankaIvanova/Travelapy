import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trv-journal-content',
  templateUrl: './journal-content.component.html',
  styleUrls: ['./journal-content.component.less']
})
export class JournalContentComponent implements OnInit {
  destinations = ['Paris', 'London', 'Florence'];
  
  constructor() { }

  ngOnInit(): void {
  }

}
