import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Car } from '../cars';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cars: Car[] = [];
  totalAmount: any; //!

  checkoutForm = this.formBuilder.group({
    email: '',
    fullname: '',
    address: ''
  });

  constructor(  
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { }

  onSubmit(){
    // this.cars = this.cartService.clearCart();
    console.warn('Your order has been submitted. Please await for confirmation via email', 
    this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  
  ngOnInit(){
    console.log(
    this.cartService.cart.value
    );
    //this.totalAmount = this.cartService.getTotalPrice();
    this.cars = this.cartService.cart.value;
    this.totalAmount = this.cartService.getTotalPrice();
  }

}
