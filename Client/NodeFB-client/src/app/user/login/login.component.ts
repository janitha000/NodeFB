import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../../services/user.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute,
    private userService: UserService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: [''],
      password: ['']
    });

    this.userService.logout();
  }

  onSubmit() {
    this.userService.login(this.loginForm.controls.name.value, this.loginForm.controls.password.value)
      .subscribe( data => {
        this.router.navigate(['/home']);
      },
      error => {
        
      })
  }

}
