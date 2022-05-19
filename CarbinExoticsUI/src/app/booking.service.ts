import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';
import { Booking } from './models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  url = 'https://localhost:44311/api';

  constructor(
     private cartService: CartService,
     private http: HttpClient
    ) { }

    submitBooking(booking : Booking): Observable<any> {
      const httpOptions = { headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${sessionStorage.getItem('jwt')}`
      })};

      return this.http.post<Booking>(this.url + '/Booking/', booking, httpOptions);
    }
}
