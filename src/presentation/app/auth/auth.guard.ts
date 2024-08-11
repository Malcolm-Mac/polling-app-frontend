import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(): boolean {
    const user = localStorage.getItem('user');
    console.log('succes'+ user);
    if (user) {
      console.log('succes');
      return true;
    } else {
      console.log('succes');
      this.router.navigate(['/login']);
      return false;
    }
  }
};


