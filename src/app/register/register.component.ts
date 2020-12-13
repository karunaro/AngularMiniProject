import { Component, OnInit } from '@angular/core';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public userService: UserService, public fb: FormBuilder,  private router: Router) {
  }

  ngOnInit(): void {
    this.infoForm();
  }

  infoForm() {
    this.userService.dataForm = this.fb.group({
      id: null,
      nom: ['', [Validators.required, Validators.minLength(4), Validators.pattern('[a-zA-z]+$')]],
      num: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.minLength(8),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required, Validators.minLength(8)]],

    });
  }
  ResetForm() {
    this.userService.dataForm.reset();
  }
  onSubmit() {

    if (this.userService.dataForm.value.pwd === this.userService.dataForm.value.pwdd)
    {
      this.addData();
    }
    else
    {
      // this.toastr.warning( 'Vérifiet votre de passe ...');
    }
  }

  addData() {
    this.userService.createData(this.userService.dataForm.value).subscribe
    (data => {

      this.router.navigate(['/login']);
    });
  }
}
