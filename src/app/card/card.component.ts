import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <img [src]="product.img" [alt]="product.name" />
      <h3>{{ product.name }}</h3>
      <p class="desc">{{ product.description }}</p>
      <p class="price">{{ product.price }}</p>
      <button class="btn">Order Now</button>
    </div>
  `,
  styles: [`
    .card {
      background: #fff;
      border-radius: 16px;
      padding: 1rem;
      width: 250px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }
    .card:hover {
      transform: translateY(-6px);
    }
    img {
      width: 100%;
      height: 180px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 0.5rem;
    }
    h3 {
      margin: 0.5rem 0;
      font-size: 1.3rem;
      color: #d6336c;
    }
    .desc {
      font-size: 0.9rem;
      color: #666;
      margin-bottom: 0.5rem;
    }
    .price {
      font-weight: bold;
      font-size: 1.1rem;
      color: #e63950;
    }
    .btn {
      background: #ff6b81;
      border: none;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 8px;
      cursor: pointer;
      font-weight: 600;
    }
    .btn:hover {
      background: #d6336c;
    }
  `]
})
export class CardComponent {
  @Input() product: any;
}
