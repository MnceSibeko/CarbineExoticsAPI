import { Injectable } from '@angular/core';
import { Car, cars } from './cars';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Car[] = [];

  addToCart(cars: Car) {
    this.items.push(cars);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
