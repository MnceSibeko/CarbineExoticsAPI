import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../cars';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  cars: Car[] | undefined;

  constructor(
    private carService: CarService
  ) { }

  watch() {
    window.alert('Car added to watch list, You will be notified if the car has been sold!');
  }

  addToCart() {
    window.alert('Car has been added to Cart!');
  }
  ngOnInit(): void {
    this.carService.getCars().subscribe((cars: any) => {
      this.cars = cars;
      console.log('cars', this.cars);
    })
  }

}
