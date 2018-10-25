import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  Name: string;
  loggedIn: boolean;
  private user = new Subject();
  public user$ = this.user.asObservable();

  constructor(private userService: UserService, private toastr: ToastrService, private router: Router) {
    this.user$ = this.userService.user$;
    console.log(this.user$);
  }

  ngOnInit() {
    this.loggedIn = false;
    this.loggedIn = this.isLoggedIn();

    this.userService.getEmitter().subscribe((customObject) => {
      this.loggedIn = true;
      console.log("Component is notified of successfull login!");
    });
  }

  
  onLogOut() {
    this.userService.logout();
    this.toastr.info("User logged out");
    window.location.href = '/';     
  }

  isLoggedIn(): boolean {
    var name = localStorage.getItem('current-user');
    if (name != undefined || name != null) {
      this.Name = name;
      return true;
    }
    return false;
  }

}
