import { Component, OnInit, Input } from '@angular/core';

import { HttpClientService } from "../../service/http-client.service";
import { BookServerConfig, ServerConfig } from "../../config/server-config";

interface IBook {
  title: string;
  author: string;
  desc: string;
  price: string;
  numPrice: number;
  imgUrl: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [
    HttpClientService,
    {
      provide: ServerConfig,
      useValue: BookServerConfig
    }]
})

export class ListComponent implements OnInit {

  books: IBook[];
  keyword: string;
  
  @Input()
  set setKeyword(data: string) {
    if(data !== null && data !== '') {
      console.log(data);
      this.keyword = data;
      this.getList();
    }
  }

  // Injection objects can set @optional but need null validation
  constructor(private http: HttpClientService, private apiConfig: ServerConfig) {
    this.getList();
  }

  ngOnInit() {
  }

  getList() {
    this.http.getList<IBook>(this.apiConfig.url + 'assets/data/books.json').subscribe(res => {
      this.books = res;
    });
  }
}
