import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trv-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.less']
})
export class SideBarComponent implements OnInit {
  destinations = ['Paris', 'London', 'Florence'];

  constructor() { }

  ngOnInit(): void {
  }

}
