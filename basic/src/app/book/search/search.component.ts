import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword: string;

  category = null;
  categories = [
    {code: '0', name: 'All'},
    {code: '1', name: 'Art'},
    {code: '2', name: 'Tech'}
  ];

  @Output() findBookEvent = new EventEmitter();

  constructor(private http: HttpClient)
  {
    this.http = http;
  }

  ngOnInit() {
  }

  findBook(keyword: string) : void {
    this.keyword = keyword;
    console.log(this.keyword);
    this.findBookEvent.emit({ keyword: this.keyword });
    // this.http.get('assets/data/books.json').subscribe(res => {
    //   console.log(res);
    //   this.findBookEvent.emit({ list: res});
    // });
  }
  
  txtChanged() : void {
    //auto completion
    console.log('book:search.component txtChanged())');
  }
}
