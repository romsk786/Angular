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
  number1: string;
  number2: string;
  number3: string;
  number4: string;
  number5: string;
  number6: string;
  percent: string;
  totalScore: string = '';
  grade: string = '';
  total2: any;
  percentage: any;

  constructor() { }

  ngOnInit() {
  }

  totalMarks():void{
    let total1:string = parseInt(this.number1)+parseInt(this.number2)+parseInt(this.number3)+parseInt(this.number4)+parseInt(this.number5)+parseInt(this.number6)+'';
    this.totalScore = total1+'';
    this.total2 = new Marksheet("Total", total1); 
  }

  calculatePercent(): void{
    this.percent = parseInt((parseInt(this.totalScore)/6).toFixed(2))+'%';
    this.percentage = new Marksheet("Percent", this.percent);
  }
  calculateGrade():void{
    if(parseInt(this.percent) >= 70)
      this.grade = 'Distinction';
    else if(parseInt(this.percent) >= 60)
      this.grade = 'First Class';
    else if(parseInt(this.percent) >= 50)
      this.grade = 'Second Class';
    else if(parseInt(this.percent) >= 40)
      this.grade = 'Pass Class';
    else
      this.grade = 'FAIL';

      let subject1 = new Marksheet("English", this.number1);
      let subject2 = new Marksheet("Hindi", this.number2);
      let subject3 = new Marksheet("Maths", this.number3);
      let subject4 = new Marksheet("Physics", this.number4);
      let subject5 = new Marksheet("Chemistry", this.number5);
      let subject6 = new Marksheet("Social Science", this.number6);
      let grade1 = new Marksheet("Grade", this.grade);
      this.marksheetList.push(subject1);
      this.marksheetList.push(subject2);
      this.marksheetList.push(subject3);
      this.marksheetList.push(subject4);
      this.marksheetList.push(subject5);
      this.marksheetList.push(subject6);
      this.marksheetList.push(this.total2);
      this.marksheetList.push(this.percentage);
      this.marksheetList.push(grade1);
  }
}
