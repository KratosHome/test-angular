import {Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {OrdersComponent} from "./pages/orders/orders.component";
import {ProductsComponent} from "./pages/products/products.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {LoginComponent} from "./pages/login/login.component";

export const routes: Routes = [

  {
    path: '',
    title: 'Main',
    component: LoginComponent,
 //   canActivate: [AuthGuard],
  },
  {
    path: 'orders',
    component: OrdersComponent,
  //  canActivate: [AuthGuard, RoleGuard],
    data: {role: ['admin', 'consultant']}
  },
  {
    path: 'products',
    component: ProductsComponent,
   //  canActivate: [AuthGuard, RoleGuard],
    data: {role: ['admin']}
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];
