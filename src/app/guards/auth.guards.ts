import {CanActivateFn, Router} from "@angular/router";
import {LoginServices} from "../services/login.services";
import {inject} from "@angular/core";

export function authGuard(role: string[]): CanActivateFn {
  return () => {
    const authService: LoginServices = inject(LoginServices);
    const router: Router = inject(Router);
    // const role = authService.roleSign
    const isAuth = authService.isAuthSign

    console.log("authService.isAuthSign()", authService.isAuthSign());
    console.log('authService.roleSign()', authService.roleSign());
    console.log('authService.roleSign()',  role.includes(authService.roleSign()));

    if (authService.isAuthSign() && role.includes(authService.roleSign())) {
      return true;
    }

    router.navigate(["/login"]);
    return false
  };
}
