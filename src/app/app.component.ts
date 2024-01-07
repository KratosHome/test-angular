import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {OrdersComponent} from "./pages/orders/orders.component";
import {ProductsComponent} from "./pages/products/products.component";
import {MainComponent} from "./pages/main/main.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    OrdersComponent,
    ProductsComponent,
    MainComponent,
    NavBarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'main';
}
