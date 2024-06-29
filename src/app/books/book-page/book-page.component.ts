import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {BooksFromApi} from "../book.model";
import {Router} from "@angular/router";


@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit{
  books: BooksFromApi[] = []
  bookByid?: BooksFromApi;
  showAllBooks: boolean = true;

  constructor(private bookService: BookService, private router: Router) {
  this.books = this.bookService.bookList
  }

  ngOnInit(){
  }

  // allBooksRapid(){
  //   this.bookService.getAllBooksRapid().subscribe((book: BooksFromApi[]) => this.books=book)
  //   this.showAllBooks = true;
  // }

  findBookById(id: string){
     this.bookService.getBookById(id).subscribe((book: BooksFromApi )=> {
       this.bookByid = book;
     })
    this.router.navigate(['/books/'+id]);
    this.showAllBooks = false;
  }

  switchPage():boolean{
    return this.showAllBooks
  }

}
