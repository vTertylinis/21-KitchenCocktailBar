import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  menuVisible = true;
  selectedItem: { label: string, link: string } | null = null;

  constructor(private router: Router) {}

  menuItems = [
    { label: 'Home', link: '/home' },
    { label: 'About us', link: '/anapsyktika' },
    { label: 'Menu', link: '/menu' },
    { label: 'Contact', link: '/contact' }
  ];

  onSelect(item: { label: string; link: string }) {
    this.selectedItem = item;
    this.router.navigate([item.link]);
  }
}
