import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BooksFromApi} from "./book.model";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  API_URL_Rapid: string = 'https://all-books-api.p.rapidapi.com/'

  constructor(private http: HttpClient) { }

 getAllBooksRapid(){
    return this.http.get<BooksFromApi[]>(`${this.API_URL_Rapid}getBooks`, {headers: this.header})
 }

 getBookById(id: string) {
    return this.http.get<BooksFromApi>(`${this.API_URL_Rapid}isbn/${id}`, {headers: this.header})
 }
 }
