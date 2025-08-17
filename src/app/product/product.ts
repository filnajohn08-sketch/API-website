import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <section>
      <h2>Products</h2>

      <!-- Loading and error handling -->
      <div *ngIf="loading">Loading products...</div>
      <div *ngIf="!loading && products.length === 0">No products found.</div>

      <!-- Product grid -->
      <div class="products-grid" *ngIf="!loading && products.length > 0">
        <app-card *ngFor="let p of products" [product]="p"></app-card>
      </div>
    </section>
  `,
  styles: [`
    .products-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      margin-top: 12px;
    }
  `]
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  loading = true;

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.getProducts().subscribe({
      next: (data: any[]) => {
        this.products = data.map(item => ({
          id: item.id,
          name: item.title ?? item.name ?? 'Unnamed Product',
          price: item.price ? `₹${item.price}` : 'Price unavailable',
          img: item.image ?? item.img ?? 'https://via.placeholder.com/200'
        }));
        this.loading = false;
      },
      error: (err) => {
        console.error('API error', err);
        this.loading = false;
      }
    });
  }
}

