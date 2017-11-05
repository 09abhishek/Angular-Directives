import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  numbers = [1, 2, 3, 4, 5];
  odnum = [1, 3, 5];
  evnum = [2, 4];
  oddnum ;
  bg = ' ';
  constructor() { }

  ngOnInit() {
  }

}
