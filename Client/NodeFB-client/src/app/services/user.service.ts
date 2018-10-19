import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { User } from '../user/user'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postRegistration(user: User) {
    return this.http.post('http://localhost:3000/register', user);
  }

  login(name: string, password: string) {
    return this.http.post<any>('http://localhost:3000/login', { name: name, password: password })
      .pipe(map(user => {
        if (user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      }));

  }

  logout() {
    localStorage.removeItem('currentUser');
}
}
