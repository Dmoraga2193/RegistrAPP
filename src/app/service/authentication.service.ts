import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController, Platform } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  authState = new BehaviorSubject(false);
  constructor(
    private router: Router,
    private storage: Storage,
    private platform: Platform,
    public toastController: ToastController
  ) 
  {
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    });
  }
  ifLoggedIn() {
    this.storage.get('USER_INFO').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }
  login(user, password) {
    console.log(user);
    if (user == "docente"){
      console.log(user);
      var navigationExtras: NavigationExtras = {
        state: {
          user_id: '666',
          user_name: 'docente',
          message: 'Bienvenido'
        }
      };
      console.log(user);
      this.storage.set('USER_INFO', navigationExtras).then((response) => {
        this.router.navigate(['home'],navigationExtras);
        this.authState.next(true);
        console.log(user);
      });
    }else{
      var navigationExtrasNOK: NavigationExtras = {
        state: {
          user_id: '',
          user_name: '',
          message: 'Nombre de usuario o contraseña inválidos'
        }
      };
      this.storage.set('USER_INFO', navigationExtrasNOK).then((response) => {
        this.router.navigate(['login'], navigationExtras);
        this.authState.next(false);
      });
    }
  }
  logout() {
    this.storage.remove('USER_INFO').then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    });
  }
  isAuthenticated() {
    console.log("value");
    return this.authState.value;
  }
}
