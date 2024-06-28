import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BooksFromApi} from "./book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  header = new HttpHeaders({
    'x-rapidapi-key' : '944c85c9e2msh256c30f82e98725p1e50b9jsn4e98d9ec1d67',
    'x-rapidapi-host' : 'all-books-api.p.rapidapi.com'
  })
  API_URL_Rapid: string = 'https://all-books-api.p.rapidapi.com/'
  public bookList: BooksFromApi[] = []

  constructor(private http: HttpClient) { }

 getAllBooksRapid(){
    return this.http.get<BooksFromApi[]>(`${this.API_URL_Rapid}getBooks`, {headers: this.header})
 }

 getBookById(id: string) {
    return this.http.get<BooksFromApi>(`${this.API_URL_Rapid}isbn/${id}`, {headers: this.header})
 }
 }
