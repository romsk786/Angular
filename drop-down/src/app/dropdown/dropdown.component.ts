import { Component, OnInit } from '@angular/core';
import {Dropdown} from './dropdown.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  
  constructor() { 
    console.log("Drop down component created..");
  }

  ngOnInit() {
  }
  
  countryList = [
    {
      id:1,
      code:"IND",
      desc:"India"
    },
    {
      id:2,
      code:"US",
      desc:"United States"
    },
    {
      id:3,
      code:"UK",
      desc:"United Kingdom"
    }
  ];
  
}
