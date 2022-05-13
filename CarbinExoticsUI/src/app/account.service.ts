import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs';
import { User } from './models/user';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>

  constructor(
    private router:Router,
    private http: HttpClient
  ) { 
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User{
    return this.userSubject.value;
  }

  login(email, password){
    return this.http.post<User>(`${environment.baseUrl}/api/Login`, {email, password})
    .pipe(map(user => {
      localStorage.setItem('user', JSON.stringify(user));
      this.userSubject.next(user);
      return user;
    }))
  }

  logout(){
    //continue from here :12 May 2022
  }
}

