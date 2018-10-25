import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {UserService} from '../../services/user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name : string;
  private sub: any;
  user;

  constructor(private userService : UserService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.name = params['name'];
      this.userService.getUser(this.name).subscribe( (data => {
        this.user = data;
      }))
    })
    
  }
}
