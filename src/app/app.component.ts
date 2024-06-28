import {Component, Output} from '@angular/core';
import {BookService} from "./books/book.service";
import {BooksFromApi} from "./books/book.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public bookService: BookService) {
    this.bookService.getAllBooksRapid().subscribe((book: BooksFromApi[]) => {this.bookService.bookList = book})
  }

}
