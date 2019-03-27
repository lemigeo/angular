import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, COMPOSITION_BUFFER_MODE } from '@angular/forms'; 
import { HttpClientModule } from "@angular/common/http";

import { BookMainComponent } from './book-main/book-main.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [BookMainComponent, SearchComponent, DetailComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: COMPOSITION_BUFFER_MODE,
      useValue: false
    }
  ]
})
export class BookModule { }
