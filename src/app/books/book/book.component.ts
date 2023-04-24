import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book?: Book;
  @Output() cartAdd = new EventEmitter<Book>();

  addToCart() {
    this.cartAdd.emit(this.book);
  }
}
