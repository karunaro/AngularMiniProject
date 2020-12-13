import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from './shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private authService: UserService ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.islogin) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }


}
