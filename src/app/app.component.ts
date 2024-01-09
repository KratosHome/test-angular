import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {OrdersComponent} from "./pages/orders/orders.component";
import {ProductsComponent} from "./pages/products/products.component";
import {MainComponent} from "./pages/main/main.component";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {LoginServices} from "./services/login.services";


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
  theme: string = 'light';

  constructor(public readonly loginServices: LoginServices) {
    this.initializeTheme();
  }

  initializeTheme() {
    if (typeof window !== 'undefined') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const storedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
      this.theme = storedTheme;
      document.body.setAttribute('data-theme', storedTheme);
    }
  }

  toggleTheme() {
    const newTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    document.body.setAttribute('data-theme', newTheme);
    console.log('Theme changed to', newTheme);
  }
}
