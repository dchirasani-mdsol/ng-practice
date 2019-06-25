import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {AuthService} from './auth.service';
import {Injectable} from '@angular/core';

@Injectable()
export class ProfileRouteActivator implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot)  {
    if (!this.auth.currentUser ) {
      console.log(route.parent.url);
      console.log(route.parent.url);
    }
    return true;
  }
}
