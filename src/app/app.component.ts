import { Component } from '@angular/core';
import {UserService} from './shared/user.service';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ET';
  constructor(public userService: UserService) {
  }

}
