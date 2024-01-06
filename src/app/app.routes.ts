import {Routes} from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {OrdersComponent} from "./pages/orders/orders.component";
import {ProductsComponent} from "./pages/products/products.component";

export const routes: Routes = [
  {
    path: '',
    component: MainComponent
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
