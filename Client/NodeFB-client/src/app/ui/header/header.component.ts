import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userService : UserService, private toastr : ToastrService, private router: Router) { }

  ngOnInit() {
  }

  onLogOut(){
    this.userService.logout();
    this.toastr.info("User logged out");
    this.router.navigate(['/']);
  }

}
