import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Import AngularFireAuth
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const user = await this.afAuth.authState.pipe(take(1)).toPromise();

    if (user) {
      // User is authenticated, allow access to the route
      return true;
    } else {
      // User is not authenticated, redirect to a login page or another route
      return this.router.createUrlTree(['/']); // Redirect to the login page
    }
  }
}
