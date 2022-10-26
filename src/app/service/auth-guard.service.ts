import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public authenticationService: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    if (!this.authenticationService.isAuthenticated()){
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
