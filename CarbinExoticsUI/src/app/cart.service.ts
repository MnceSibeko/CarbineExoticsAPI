import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car, cars } from './cars';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemStorage: string = "cartItem";
  cart = new BehaviorSubject<Car[]>([]);

  constructor(
    private http: HttpClient
  ) {
    let cartItems = [];     
    let json = localStorage.getItem(this.cartItemStorage);
    
    if (json) 
    {
      cartItems = JSON.parse(json);
    }

    this.cart.next(cartItems);
  }
  

  //Add selected cars to cart
  addToCart(car: Car) {
    let cartItems = this.cart.value.push(car);
    this.cart.next(this.cart.value)
    localStorage.setItem(this.cartItemStorage, JSON.stringify(this.cart.value));
  }

  getItems() {
    return this.cart;
  }

  //Remove all items from cart
  clearCart() {
    // return this.cart;
  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('./../assets/data/shipping.json');
  }

  getTotalPrice() {
    let total = 0;

    this.cart.value.map(cars => {
      total += cars.car_Price;
    })

    return total;
  }
}
