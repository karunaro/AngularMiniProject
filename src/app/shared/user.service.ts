import { Injectable } from '@angular/core';
import {User} from '../../model/user';
import {HttpClient} from '@angular/common/http';
import {DatePipe} from '@angular/common';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';
import {Place} from '../../model/Place';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:3000/users/';
  islogin = false;


  isLoggedIn: boolean;




  public dataForm: FormGroup;
  constructor(private http: HttpClient , private router: Router) { }
  createData(info: Object): Observable<Object>{
    return this.http.post(this.url, info);
  }
  getData(id) {
    return this.http.get(this.url + id);
  }
  login(creadentials){
    return this.http.post('http://localhost:3000/login', creadentials);
  }
  logout(){
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/home']);
  }
  getUser(id){
    return this.http.get<User>('http://localhost:3000/users/' + id);
  }

}
