import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-links',
  templateUrl: './app-links.component.html',
  styleUrls: ['./app-links.component.css']
})
export class AppLinksComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

}
