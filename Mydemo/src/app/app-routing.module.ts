import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppLinksComponent } from './app-links/app-links.component';
import { DLComponent } from './dl/dl.component';
import { QuickLinksComponent } from './quick-links/quick-links.component';
import { SqlComponent } from './sql/sql.component';


const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'home' , component : HomeComponent},
  {path : 'app-links' , component : AppLinksComponent},  
  {path : 'dl' , component : DLComponent},
  {path : 'quick-links' , component : QuickLinksComponent},
  {path : 'sql' , component : SqlComponent}
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
