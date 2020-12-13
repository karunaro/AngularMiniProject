import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../shared/user.service';
import {FormBuilder, NgForm, Validators} from '@angular/forms';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public fb: FormBuilder, public userService: UserService, ) { }

  ngOnInit(): void {
    this.userService.islogin = false;
    this.infoForm();

  }
  infoForm() {
    this.userService.dataForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(8),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    });
  }
  onSubmit(){


    this.userService.login(this.userService.dataForm.value).subscribe(
      (response: any) => {
      const TOKEN = response.accessToken;
      localStorage.setItem('token', TOKEN);
      this.router.navigate(['/home']);
      this.userService.isLoggedIn = true ;
      const decoded = jwt_decode(localStorage.getItem('token'));
      const id = decoded['sub'];
      console.log(decoded);
      console.log(id);
      localStorage.setItem('id', id);

    });
  }
}
