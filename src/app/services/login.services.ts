import {Injectable, signal} from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {IauthUser, Iuser} from "../types/user.interfase";
import {API_URL} from "../constants/constnts";
import {catchError, tap} from "rxjs";

@Injectable({
  providedIn: "any"
})
export class LoginServices {
  isAuthSign = signal<boolean>(true)
  roleSign = signal<string>("admin")

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router
  ) {
    // const token = localStorage.getItem("token");
   // this.isAuthSign.set(!!token);
  }

  signUp(userData: IauthUser) {
    return this.http.post(`${API_URL}/auth/sign-up`, userData)
      .pipe(
        catchError(err => {
            console.log(err);
            this.handleError(err);
            throw new Error(err);
          }
        ))
      .subscribe(() => {
        console.log("success");
      });
  }

  login(userData: IauthUser) {
    return this.http.post<Iuser>(`${API_URL}/auth/login`, userData)
      .pipe(
        tap((respons: Iuser) => {
            localStorage.setItem("token", respons.token);
            this.isAuthSign.set(true);
            this.roleSign.set(respons.role);
          }
        ))
      .subscribe(() => {
        this.router.navigate(["/main"]);
      })
  }

  logout() {
    localStorage.removeItem("token");
    this.isAuthSign.set(false);
    this.roleSign.set("");
    this.router.navigate(["/main"]);
  }

  private handleError(error: HttpErrorResponse): void {
    console.log(error);
  }
}
