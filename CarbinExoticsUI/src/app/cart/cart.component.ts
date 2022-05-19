import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { Car } from '../cars';
import { BehaviorSubject } from 'rxjs';
import { BookingService } from '../booking.service';
import { __values } from 'tslib';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cars: Car[] = [];
  totalAmount: any; //!
  cart = new BehaviorSubject<Car[]>([]);


  bookingForm = this.formBuilder.group({
    email: '',
    fullname: '',
    address: '',
    carId: '',
  });
  showForm: boolean;

  constructor(  
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private bookingService: BookingService
  ) { }

  onSubmit(){
    console.warn('Your booking has been submitted. Please await for confirmation via email', 
    this.bookingForm.value);
    this.bookingForm.reset();
  }
  
  ngOnInit(){
    console.log(
    this.cartService.cart.value
    );
    this.cars = this.cartService.cart.value;
    this.totalAmount = this.cartService.getTotalPrice();
  }

  clearBookingForm(){
   //Code to clear cart
   this.showForm = false;
   this.totalAmount.reset();
  }

  booking(carId: any){
    this.showForm = true;
    this.bookingForm.controls['carId'].setValue(carId);
  }

  submit(data: any){
    console.log(data);
    this.bookingService.submitBooking(data).subscribe(x => {
      console.log(x);
    })
    this.showForm = false;
    window.alert('Your booking has been submitted. Please await for confirmation via email');
  }
}
