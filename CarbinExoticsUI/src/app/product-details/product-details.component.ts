import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';
import { Car, cars } from '../cars';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  car: Car | undefined;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
    ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const carIDfromRoute = Number(routeParams.get('car_ID'));

    // Find the product that correspond with the id provided in route.
    this.carService.getCarById(carIDfromRoute)
    .subscribe((car: any) => {
      this.car = car;
    })
  }
}
