import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Book } from '../shared/book';

@Component({
  selector: 'app-cart-display',
  standalone: true,
  imports: [CurrencyPipe, NgIf, NgFor],
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartDisplayComponent {
  @Input() books: Book[] = [];

  get totalValue(): number {
    return this.books.reduce((acc, book) => acc + book.price, 0);
  }
}
