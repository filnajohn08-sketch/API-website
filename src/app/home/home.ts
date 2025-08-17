import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section>
      <h1>Welcome</h1>
      
      <p>Click <a routerLink="/product">Products</a> to view items.</p>
    </section>
  `
})
export class HomeComponent {}
