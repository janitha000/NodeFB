import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router'

import {PostService} from '../../services/post.service'

@Component({
  selector: 'app-homeview',
  templateUrl: './homeview.component.html',
  styleUrls: ['./homeview.component.css']
})
export class HomeviewComponent implements OnInit {
  posts;

  constructor(private postService : PostService, private toastr: ToastrService, private router : Router) { }

  ngOnInit() {
    this.postService.getAllPosts().subscribe( data => {
      this.posts = data;
    },
    error => this.toastr.error(error.error.message, "Error")
  )}

  onNameClick(name : string){
    var profileUrl = "/profile/" + name;
    this.router.navigate([profileUrl]);
  }
}


