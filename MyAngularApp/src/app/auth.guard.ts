
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const roles = next.data['roles'] as Array<string>;
    const userRoles = this.authService.getRoles();

    // Check if user has at least one of the required roles
    if (roles.some(role => userRoles.includes(role))) {
      return true;
    }

    this.router.navigate(['/access-denied']); // Redirect if not authorized
    return false;
  }
}
