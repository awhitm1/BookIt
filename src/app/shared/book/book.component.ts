import { Component, EventEmitter, Output, Input, OnInit} from '@angular/core';
import { Book } from './book.model';
import { BookshelfService } from 'src/app/bookshelf/bookshelf.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  @Input() book: Book;



  constructor(private bookshelfService: BookshelfService){}

  ngOnInit(): void {

  }

  onBookSelected(){
    this.bookshelfService.bookSelected.emit(this.book);
  }
}
