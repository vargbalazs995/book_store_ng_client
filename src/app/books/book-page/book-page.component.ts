import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {BooksFromApi} from "../book.model";


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit{
  books: BooksFromApi[] = []
  bookByid?: BooksFromApi;
  showAllBooks: boolean = true;

  constructor(private bookService: BookService) { }

  ngOnInit(){
    this.allBooksRapid()
  }

  allBooksRapid(){
    this.bookService.getAllBooksRapid().subscribe((book: BooksFromApi[]) => this.books=book)
    this.showAllBooks = true;
  }

  findBookById(id: string){
     this.bookService.getBookById(id).subscribe((book: BooksFromApi )=> {
       this.bookByid = book;
     })
    this.showAllBooks = false;
  }

  switchPage():boolean{
    return this.showAllBooks
  }

}
