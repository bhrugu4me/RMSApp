import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'az-none',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './NoAccess.component.html',
  styleUrls: ['./NoAccess.component.scss']
})
export class NoAccessComponent implements OnInit  {  
constructor() { }

  ngOnInit() {
  }

}