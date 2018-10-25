import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, RequestOptions } from "@angular/http"
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  getAllPosts() {    
    return this.http.get('http://localhost:3000/post')
      .pipe(map(posts => {
        return posts;
      }) )
  }

  postPost(name : string, postContent : string) {
    var post = {
      "name" : name,
      "content" : postContent
    }
    return this.http.post('http://localhost:3000/post', post);    
  }
}
