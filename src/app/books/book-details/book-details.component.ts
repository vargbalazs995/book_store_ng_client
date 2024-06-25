import {Component, Input} from '@angular/core';
import {BooksFromApi} from "../book.model";

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Input() bookById?: BooksFromApi;
}
