import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  book = {
    title: 'The Institute: A Novel',
    author: 'Stephen King',
    desc: 'From #1 New York Times bestselling author Stephen King, the most riveting and unforgettable story of kids confronting evil since It—publishing just as the second part of It, the movie, lands in theaters.',
    price: '20.00',
    numPrice: 20,
    imgUrl: 'https://images-na.ssl-images-amazon.com/images/I/41C4s4Q4MYL._SX329_BO1,204,203,200_.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

  getBook() {
    return this.book;
  }
}