import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../cars';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input() car: Car | undefined;
  @Input() isDetail: boolean = false;
  
  constructor(
    private cartService: CartService
  ) { }

  addToCart(car: any) {
    this.cartService.addToCart(car);
    window.alert('Your product has been added to the cart!');
  }

  watch() {
    window.alert('Car added to watch list, You will be notified if the car has been sold!');
  }

  ngOnInit(): void {
    console.log(this.car);
  }

}
