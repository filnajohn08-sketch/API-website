import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <img [src]="product.img" [alt]="product.name">
      <h3>{{ product.name }}</h3>
      <p>{{ product.price }}</p>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 10px;
      width: 200px;
      text-align: center;
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 4px;
    }
  `]
})
export class CardComponent {
  @Input() product: any;
}
