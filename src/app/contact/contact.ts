import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section class="contact">
      <div class="content">
        <h2>Get in Touch ✨</h2>
        <p class="subtitle">We’d love to hear from you</p>

        <div class="info">
          <div class="card">
            <span class="icon">📧</span>
            <h3>Email</h3>
            <p>support@lumea.com</p>
          </div>
          <div class="card">
            <span class="icon">📞</span>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>
          <div class="card">
            <span class="icon">📍</span>
            <h3>Address</h3>
            <p>21 Bloomora Street, Orchid Heights,<br> Bengaluru, India</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      background: linear-gradient(135deg, #fbc2eb, #a6c1ee, #fad0c4);
      background-size: 300% 300%;
      animation: gradientShift 15s ease infinite;
    }

    .content {
      max-width: 900px;
      text-align: center;
      padding: 3rem;
      border-radius: 2rem;
      background: rgba(255, 255, 255, 0.3);
      backdrop-filter: blur(16px);
      box-shadow: 0 12px 32px rgba(0,0,0,0.15);
    }

    h2 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
      background: linear-gradient(90deg, #ff758c, #ff7eb3, #a18cd1, #fbc2eb);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .subtitle {
      font-size: 1.2rem;
      margin-bottom: 2.5rem;
      color: #333;
      font-style: italic;
    }

    .info {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 1.5rem;
    }

    .card {
      background: rgba(255, 255, 255, 0.55);
      padding: 2rem;
      border-radius: 1.5rem;
      box-shadow: 0 8px 20px rgba(0,0,0,0.1);
      transition: transform 0.25s ease, box-shadow 0.25s ease;
    }

    .card:hover {
      transform: translateY(-6px) scale(1.03);
      box-shadow: 0 12px 28px rgba(0,0,0,0.15);
    }

    .icon {
      font-size: 2rem;
      display: block;
      margin-bottom: 0.8rem;
    }

    .card h3 {
      font-size: 1.3rem;
      margin-bottom: 0.4rem;
      color: #444;
    }

    .card p {
      font-size: 1rem;
      color: #222;
    }

    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `]
})

export class ContactComponent {}
