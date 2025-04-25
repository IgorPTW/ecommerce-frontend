import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-status',
  templateUrl: './cart-status.component.html', // ok
  styleUrl: './cart-status.component.css' // ok
})
export class CartStatusComponent implements OnInit { // READ!

  totalPrice: number = 0.00;
  totalQuantity: number = 0;

  constructor(private cartService: CartService) {} // ok

  ngOnInit(): void { // ok
    this.updateCartStatus();
  }

  updateCartStatus() { // ok

    // Subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // Subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );
  }
}
