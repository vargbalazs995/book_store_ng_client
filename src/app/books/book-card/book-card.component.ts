import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BooksFromApi} from "../book.model";

@Component({
  selector: 'book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {
  @Input() book?: BooksFromApi[];
  @Output() articleId:EventEmitter<string> = new EventEmitter<string>();

  submitArticleId(isbn: string){
    this.articleId.emit(isbn)
  }

}
