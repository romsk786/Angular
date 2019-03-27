import { Component, OnInit } from '@angular/core';
import { Marksheet } from './marksheet.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {

  headerList: string[] = ["Subject","Marks"];
  columnNameList: string[] = ["subject","marks"];
  marksheetList: Marksheet[] = [];
  number1: number;
  number2: number;
  number3: number;
  number4: number;
  number5: number;
  number6: number;
  percent: number;
  totalScore: number;
  grade: string = '';

  constructor() { }

  ngOnInit() {
  }

  totalMarks():void{
    let total1:number = this.number1+this.number2+this.number3+this.number4+this.number5+this.number6;
    this.totalScore = total1;
  }

  calculatePercent(): void{
    this.percent = this.totalScore/6;
  }
  calculateGrade():void{
    if(this.percent >= 70)
      this.grade = 'Distinction';
    else if(this.percent >= 60)
      this.grade = 'First Class';
    else if(this.percent >= 50)
      this.grade = 'Second Class';
    else if(this.percent >= 40)
      this.grade = 'Pass Class';
    else
      this.grade = 'FAIL';

      let subject1 = new Marksheet("English", this.number1);
      let subject2 = new Marksheet("Hindi", this.number2);
      let subject3 = new Marksheet("Maths", this.number3);
      let subject4 = new Marksheet("Physics", this.number4);
      let subject5 = new Marksheet("Chemistry", this.number5);
      let subject6 = new Marksheet("Social Science", this.number6);
      this.marksheetList.push(subject1);
      this.marksheetList.push(subject2);
      this.marksheetList.push(subject3);
      this.marksheetList.push(subject4);
      this.marksheetList.push(subject5);
      this.marksheetList.push(subject6);
  }
}
