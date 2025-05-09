import {HttpHandler, HttpRequest} from "@angular/common/http";
import {API_URL} from "../constants/constnts";

export class LoginInterceptor {
  constructor() {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ) {
    const token = localStorage.getItem("token");

    if (token) {
      req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        },
        url: `${API_URL}/${req.url}`
      });
    }
    return next.handle(req);
  }
}
