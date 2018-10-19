import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user/user'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  postRegistration(user: User) {
    return this.http.post('http://localhost:3000/register', user);
  }
}
