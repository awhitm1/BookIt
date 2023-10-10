import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookshelfService {
  bookListChanged = new EventEmitter <>

  constructor() { }

  getBooks(){
    return this.myBooks.slice();
  }

  saveBook(book: Book){
    this.myBooks.push(book);
  }

  removeBook(idx: number){
    if (idx !== -1){
      this.myBooks.splice(idx,1);
    }
  }

}



