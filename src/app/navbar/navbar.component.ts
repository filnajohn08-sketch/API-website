import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="navbar">
      <a routerLink="">Home</a>
      <a routerLink="products">Products</a>
      <a routerLink="contact">Contact</a>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      gap: 16px;
      background: #333;
      padding: 12px;
    }
    .navbar a {
      color: white;
      text-decoration: none;
    }
    .navbar a:hover {
      text-decoration: underline;
    }
  `]
})
export class NavbarComponent {}

