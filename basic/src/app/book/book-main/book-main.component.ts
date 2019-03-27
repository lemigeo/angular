import { Component, AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-book-main',
  templateUrl: './book-main.component.html',
  styleUrls: ['./book-main.component.css']
})

export class BookMainComponent implements AfterViewInit {

  keyword: string;
  
  @ViewChild('noticeSection')
  noticeSection: ElementRef;
  
  @ViewChild(DetailComponent)
  detail: DetailComponent;

  constructor(private elem: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    console.log(this.detail.getBook());
    let notice = this.renderer.createText(this.getNotice());
    this.renderer.appendChild(this.noticeSection.nativeElement, notice);
  }

  getNotice() : string {
    return "Please let me know";
  }

  updateKeyword(data) : void {
    console.log(data);
    this.keyword = data.keyword;
  }
}
