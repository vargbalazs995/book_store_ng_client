export interface Books {
  ISBN: number;
  title: string;
  author: string;
  summary: string;
  image: string;
  price: Price;
}

export interface Book {
  isbn: number;
  title: string;
  author: BookByAuthor;
  summary: string;
  image: string;
  price: Price;
}

export interface Price {
  currency: string;
  value: number;
}

export interface BookByAuthor {
  id: number;
  name: string;
  biography: string;
  image: string;
  book: Books[];
}

export interface BooksFromApi {
  bookTitle: string;
  bookImage: string;
  bookDescription: string;
  bookAuthor: string;
  amazonBookUrl: string;
  bookIsbn: string;
  bookRank: number;

}
