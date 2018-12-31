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
  minus: number;
  multiply: number;
  divide: number;
  constructor() { 
    console.log("NumberComponent Object created");
  }

  ngOnInit() {
    
  }
  addNum(number:string):void{
    this.numberList.push(number);
    console.log(number);
    
  }
  addition(number1:string,number2:string):void{
    this.sum = parseInt(number1) + parseInt(number2);
    console.log(this.sum);
  }
  subtraction(number1:string,number2:string):void{
    this.minus = parseInt(number1) - parseInt(number2);
    console.log(this.minus);
  }
  
  multiplication(number1:string,number2:string):void{
    this.multiply = parseInt(number1) * parseInt(number2);
    console.log(this.multiply);
  }
  
  division(number1:string,number2:string):void{
    this.divide = parseInt(number1) / parseInt(number2);
    console.log(this.divide);
  }
}
