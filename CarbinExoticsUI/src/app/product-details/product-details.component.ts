import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, cars } from '../cars';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  car: Car | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const carIDfromRoute = Number(routeParams.get('car_id'));

    // Find the product that correspond with the id provided in route.
    this.car = cars.find(car => car.car_id === carIDfromRoute);
  }
}
