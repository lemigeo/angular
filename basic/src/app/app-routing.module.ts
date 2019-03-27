import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./pages/home/home.component";
import { BookMainComponent } from "./book/book-main/book-main.component";
import { MovieMainComponent } from "./movie/movie-main/movie-main.component";


const routes: Routes = [
  { path : '', component : HomeComponent },
  { path : 'book', component : BookMainComponent },
  { path : 'movie', component : MovieMainComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
