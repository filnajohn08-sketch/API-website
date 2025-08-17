import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <h2>Contact</h2>
    <p>Email: info@myshop.com</p>
    <p>Phone: +91 98765 43210</p>
    <p>Address: Your city, India</p>
  `
})
export class ContactComponent {}
