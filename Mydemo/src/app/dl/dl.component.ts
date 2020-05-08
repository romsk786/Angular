import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dl',
  templateUrl: './dl.component.html',
  styleUrls: ['./dl.component.css']
})
export class DLComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

}
