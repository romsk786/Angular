import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {

  total: number;
  per: number;
  grade: string = '';
  marks: number;
  sub1: number;
  sub2: number;
  sub3: number;
  sub4: number;
  sub5: number;
  sub6: number;

  constructor() { }

  ngOnInit() {
  }

  setMarks(marks:string):void{
    console.log(marks);
    this.marks = parseInt(marks);
  }

  totalMarks(sub1:string,sub2:string,sub3:string,sub4:string,sub5:string,sub6:string):void{
    this.sub1 = parseInt(sub1);
    this.sub2 = parseInt(sub2);
    this.sub3 = parseInt(sub3);
    this.sub4 = parseInt(sub4);
    this.sub5 = parseInt(sub5);
    this.sub6 = parseInt(sub6);
  }

  setTotal(total:string):void{
    console.log(total);

    this.total = parseInt(total);
  }

  calcPer(total:string):void{
    let per = this.total/6;
    this.per = per;
    if(per >= 70)
      this.grade = 'D';
    else if(per >= 60)
      this.grade = 'F';
    else if(per >= 50)
      this.grade = 'S';
    else if(per >= 40)
      this.grade = 'P';
    else
      this.grade = 'FAIL';
  }
}
