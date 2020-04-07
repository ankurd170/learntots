import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthoService } from './autho.service';

@Injectable({
  providedIn: 'root'
})
export class AuthoGuard implements CanActivate {
  
  constructor(private authservice:AuthoService,private router:Router){

if (!this.authservice.getlogin()) 
{
this.router.navigate(["/home"]);  
}

  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authservice.getlogin();
  }
  
}
