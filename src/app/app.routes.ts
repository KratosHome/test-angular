import {Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {OrdersComponent} from "./pages/orders/orders.component";
import {ProductsComponent} from "./pages/products/products.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {LoginComponent} from "./pages/login/login.component";
import {authGuard} from "./guards/auth.guards";

export const routes: Routes = [
  {
    path: 'login',
    title: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    title: 'Main',
    component: MainComponent,
    canActivate: [authGuard(['admin', 'consultant'])],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [authGuard(['admin', 'consultant'])],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [authGuard(['admin', 'manager'])],
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
