import {Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {OrdersComponent} from "./pages/orders/orders.component";
import {ProductsComponent} from "./pages/products/products.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: '**',
    component: PageNotFoundComponent
  },
  {
    path: '',
    component: MainComponent,
    title: 'Main'
  },
  {
    path: 'orders',
    component: OrdersComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  }
];
