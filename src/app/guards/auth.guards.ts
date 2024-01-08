import {CanActivateFn, Router} from "@angular/router";
import {LoginServices} from "../services/login.services";
import {inject} from "@angular/core";

export function authGuard(role: string[]): CanActivateFn {
  return () => {
    const authService: LoginServices = inject(LoginServices);

    if (authService.isAuthSign() && role.includes(authService.roleSign())) {
      return true;
    }

    return false
  };
}
