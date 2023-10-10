import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-selector',
  templateUrl: './quantity-selector.component.html',
  styleUrls: ['./quantity-selector.component.css']
})
export class QuantitySelectorComponent {
  @Input() quantity: number = 0;
  @Output() quantityChange = new EventEmitter<number>();

  incrementQuantity() {
    this.quantity++;
    this.quantityChange.emit(this.quantity);
  }

  decrementQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

}
