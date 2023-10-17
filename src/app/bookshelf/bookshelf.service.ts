import { Injectable, EventEmitter } from '@angular/core';
import { Book } from '../shared/book/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookshelfService {
  bookSelected = new EventEmitter<Book>();
  bookListChanged = new EventEmitter <Book[]>();

  private myBooks: Book[] = [
    new Book(
      'The Stand',
      'Stephen King',
      'Horror',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Amazonia',
      'James Rollins',
      'Adventure',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'Dune',
      'Frank Herbert',
      'Mystery',
      'https://source.unsplash.com/50x50/?mystery,book'
    ),
    new Book(
      'A Game of Thrones',
      'George R.R. Martin',
      'Fantasy',
      'https://source.unsplash.com/50x50/?mystery,book'
    )
];

  constructor() { }

  getBooks(){
    return this.myBooks.slice();
  }

  saveBook(book: Book){
    this.myBooks.push(book);
    this.bookListChanged.emit(this.myBooks.slice())
  }

  removeBook(idx: number){
    if (idx !== -1){
      this.myBooks.splice(idx,1);
      this.bookListChanged.emit(this.myBooks.slice());
    }
  }

  getBook(idx: number){
    return this.myBooks.slice()[idx]
  }

}



