import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import{ UserService} from '../../services/user.service'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm : FormGroup;

  constructor(private formBuilder : FormBuilder, private router : Router, private userService : UserService) { }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      email : [''],
      username : [''],
      password : ['']
    });
  }

  onSubmit(){
    

    this.userService.postRegistration(this.registrationForm.value).subscribe(
      data => {
        console.log("registration successfull");
        this.router.navigate(['/login'])
      }
    )
  }

}
