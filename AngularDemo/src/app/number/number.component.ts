import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  numberList: string[] = [];
  sum: number;
  constructor() { 
    console.log("NumberComponent Object created");
  }

  ngOnInit() {
    
  }
  addNum(number:string):void{
    this.numberList.push(number);
    console.log(number);
    
  }
  addNums(number1:string,number2:string):void{
    
    this.sum = parseInt(number1) + parseInt(number2);
    console.log(this.sum);
  }
}
