import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http : HttpClient) { }

  getAllStats() {
    return this.http.get('http://localhost:3000/stat')
      .pipe(map(stats => {
        return stats;
      }))
  }
}
