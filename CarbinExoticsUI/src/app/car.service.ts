import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Car } from './cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(
  private http: HttpClient
  ) { }

  getCars(){
    return this.http.get<Car[]>(`${environment.baseUrl}/api/Car`);
  }

  getCarById(carIDfromRoute: number) {
    return this.http.get<Car[]>(`${environment.baseUrl}/api/Car/${carIDfromRoute}`);
  }
}
