import { Component, EventEmitter, Output } from '@angular/core';
import { Book } from 'src/app/shared/book/book.model';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {

  @Output() currentSelectedBook = new EventEmitter<Book>();

  myBooks: Book[] = [
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

handleBookSelected(book: Book) {
  this.currentSelectedBook.emit(book);
}
}
