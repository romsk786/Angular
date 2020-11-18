import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { SocialMediaComponent } from './socialmedia/socialmedia.component';
import { FinanceComponent } from './finance/finance.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'sports' , component : SportsComponent},
  {path : 'socialmedia' , component : SocialMediaComponent},
  {path : 'finance' , component : FinanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
