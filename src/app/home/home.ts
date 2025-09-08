import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="hero">
      <div class="overlay"></div>
      <div class="content">
        <h1 class="title">Welcome to <span>Luméa</span></h1>
        <p class="subtitle">Bringing colours & elegance to your lifestyle ✨</p>
        <a routerLink="/products" class="btn">Explore Collection</a>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: linear-gradient(135deg, #ff9a9e, #fad0c4, #fbc2eb, #a1c4fd, #c2e9fb);
      background-size: 300% 300%;
      animation: gradientShift 15s ease infinite;
      overflow: hidden;
    }

    .overlay {
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(12px);
    }

    .content {
      position: relative;
      z-index: 1;
      max-width: 800px;
      padding: 3rem;
      border-radius: 2rem;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(20px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    }

    .title {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1rem;
      line-height: 1.2;
      color: #222;
    }

    .title span {
      background: linear-gradient(90deg, #ff758c, #ff7eb3, #a18cd1, #fbc2eb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      font-size: 1.3rem;
      margin-bottom: 2.5rem;
      color: #333;
      font-style: italic;
    }

    .btn {
      display: inline-block;
      background: linear-gradient(90deg, #43e97b, #38f9d7);
      color: #fff;
      padding: 1rem 2.5rem;
      border-radius: 999px;
      font-weight: 600;
      text-decoration: none;
      font-size: 1.2rem;
      transition: transform 0.25s ease, box-shadow 0.25s ease;
      box-shadow: 0 8px 24px rgba(56, 249, 215, 0.4);
    }

    .btn:hover {
      transform: translateY(-4px) scale(1.05);
      box-shadow: 0 12px 30px rgba(67, 233, 123, 0.5);
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `]
})
export class HomeComponent {}
