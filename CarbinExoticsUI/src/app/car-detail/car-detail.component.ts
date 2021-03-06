import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../cars';
import { CartService } from '../cart.service';
import { BookingService } from '../booking.service';
import { NotificationService } from '../notification.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input() car: Car | undefined;
  @Input() isDetail: boolean = false;
  totalAmount: any;
  
  constructor(
    private cartService: CartService,
    private bookingService: BookingService,
    private formBuilder: FormBuilder,
    private notifyService : NotificationService
  ) { }

  bookingForm = new FormGroup({});
  showForm: boolean;

  addToCart(car: any) {
    this.cartService.addToCart(car);
    this.notifyService.showWarning("Car added to watch list. You will be notified if the car has been sold!" + "")
    // window.alert('Car has been booked for test drive, proceed to cart for confirmation!');
  }

  watch() {
    window.alert('Car added to watch list, ');
  }

  ngOnInit(): void {
    console.log(this.car);
    
    this.bookingForm = this.formBuilder.group({
      email: ['',[Validators.email, Validators.required]],
      fullname: ['',[Validators.required]],
      address: ['',[Validators.required]],
      car_ID: [this.car?.car_ID ,[Validators.required]],
    });
  }

  clearBookingForm(){
    //Code to clear cart
    this.showForm = false;
    this.totalAmount.reset();
   }
  
  onSubmit(){
    // console.warn('Your booking has been submitted. Please await for confirmation via email', 
    // this.bookingForm.value);
    this.bookingForm.reset();
  }

  book(carId: any){
    this.showForm = true;
    this.bookingForm.controls['car_ID'].setValue(carId);
  }

  submit(data: any){
    console.log(data);
    this.bookingService.submitBooking(data).subscribe(x => {
      console.log(x);
    })
    this.showForm = false;
    this.notifyService.showInfo("Booking submitted! Please await for confirmation via email.")
    // window.alert('Your booking has been submitted. Please await for confirmation via email');
  }
}
