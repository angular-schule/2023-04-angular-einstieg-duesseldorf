import { Injectable } from '@angular/core';
import { Book } from '../shared/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>('https://api.angular.schule/books');
  }

  getSingle(isbn: string) {}

  // delete(book: Book) {}

  // create(book: Book) {}


  getAllStatic(): Book[] {
    return [
      {
        isbn: '12345',
        title: 'Angular!',
        description: 'Grundlagen und Best Practices',
        rating: 5,
        price: 36.9,
        firstThumbnailUrl: 'https://api.angular.schule/avatar/5',
      },
      {
        isbn: '23456',
        title: 'React!',
        description: 'Das Framework von Facebook',
        rating: 3,
        price: 32.9,
        firstThumbnailUrl: 'https://api.angular.schule/avatar/3',
      },
      {
        isbn: '34567',
        title: 'Vue.js!',
        description: 'Grün und vunderbar',
        rating: 5,
        price: 29.9,
        firstThumbnailUrl: 'https://api.angular.schule/avatar/4',
      },
    ];
  }
}
