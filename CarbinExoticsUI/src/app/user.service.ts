import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  url = 'https://localhost:44311/api';

  constructor(private http: HttpClient) { }

  createUser(user: User): Observable<User> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<User>(this.url + '/User/',  
    user, httpOptions);
  }

  login(user : Login): Observable<any>{
    return this.http.post(this.url + '/Login/',
    user);
  }
}
