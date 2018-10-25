import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject }    from 'rxjs';

import { User } from '../user/user'
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user = new Subject();
  public user$ = this.user.asObservable();

  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();
  

  constructor(private http: HttpClient) { }

  postRegistration(user: User) {
    return this.http.post('http://localhost:3000/register', user);
  }

  login(name: string, password: string) {
    console.log(name + password)
    return this.http.post<any>('http://localhost:3000/login', { name: name, password: password })
      .pipe(map(user => {
        if (user.token) {
          localStorage.setItem('current-token', JSON.stringify(user.token));
          localStorage.setItem('current-user', name);
          localStorage.setItem('isLoggedIn', "true");
          var loggedIn = true;

          this.fireIsLoggedIn.emit(loggedIn);
        }

        return user;
      }));

  }

  logout() {
    localStorage.removeItem('current-token');
    localStorage.removeItem('current-user');
    localStorage.setItem('isLoggedIn', "false");
  }

  getEmitter() {
    return this.fireIsLoggedIn;
  }


}
