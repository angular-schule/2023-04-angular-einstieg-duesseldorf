import { Component } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { staticBookList } from 'src/app/shared/book-data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books: Book[] = [];
  // books2!: Book[]; // Non-Null Assertion // avoid!

  constructor() {
    this.books = staticBookList;
  }
}

