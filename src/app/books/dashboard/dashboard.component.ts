import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book';
import { BookStoreService } from '../book-store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books: Book[] = [];
  cart: Book[] = [];
  // books2!: Book[]; // Non-Null Assertion // avoid!

  constructor(private bs: BookStoreService) {
    // this.books = this.bs.getAllStatic();
    this.bs.getAll().subscribe(books => {
      this.books = books;
    });
  }

  addToCart(book: Book) {
    this.cart = [...this.cart, book];
    console.log(this.cart);
  }
}

