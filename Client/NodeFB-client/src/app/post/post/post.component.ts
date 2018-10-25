import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import {PostService} from '../../services/post.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postForm : FormGroup
  constructor(private postService : PostService, private formBuilder : FormBuilder, private router : Router, private toastr : ToastrService) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      post : ['']
    });
  }

  onSubmit(){
    this.postService.postPost(localStorage.getItem('current-user'), this.postForm.controls.post.value).subscribe(
      data => {
        console.log("Post added")
        this.toastr.success("Added post successfully");
        this.router.navigate(['/home']);
      },
      error => {
        console.log(error);
      }
    )
  }

}
