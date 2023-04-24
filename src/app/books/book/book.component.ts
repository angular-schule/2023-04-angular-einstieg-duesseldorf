import { Component, Input } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() book?: Book;
}
