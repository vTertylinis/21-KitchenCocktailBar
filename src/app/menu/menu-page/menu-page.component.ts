import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  standalone: false,
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css'
})
export class MenuPageComponent  {
  searchTerm: string = '';

  menuItems: MenuItem[] = [
    { id: 1, name: 'Ελληνικός - Μονός', price: 2.5, category: 'Coffee' },
    { id: 2, name: 'Ελληνικός - Διπλός', price: 3, category: 'Coffee' },
    { id: 3, name: 'Nescafe', price: 3, category: 'Coffee' },
    { id: 4, name: 'Nescafe φραπέ', price: 3, category: 'Coffee' },
    { id: 5, name: 'Americano', price: 3.5, category: 'Coffee' },
    { id: 6, name: 'Espresso - Μονός', price: 3, category: 'Coffee' },
    { id: 7, name: 'Espresso - Διπλός', price: 3.5, category: 'Coffee' },
    { id: 8, name: 'Cappuccino - Μονός', price: 3.5, category: 'Coffee' },
    { id: 9, name: 'Cappuccino - Διπλός', price: 4, category: 'Coffee' },
    { id: 10, name: 'Freddo espresso', price: 3.5, category: 'Coffee' },
    { id: 11, name: 'Freddo cappuccino', price: 4, category: 'Coffee' },
    { id: 12, name: 'Macchiato', price: 3.5, category: 'Coffee' },
    { id: 13, name: 'Macchiato διπλός', price: 4, category: 'Coffee' },
    { id: 14, name: 'Latte', price: 4.5, category: 'Coffee' },
    { id: 15, name: 'Καφές φίλτρου', price: 3, category: 'Coffee' },
    { id: 16, name: 'Σοκολάτα', price: 4, category: 'Coffee' },
    { id: 17, name: 'Σοκολάτα βιενουά', price: 4.5, category: 'Coffee' },
    { id: 30, name: 'Κρουασάν σοκολάτας', price: 2.5, category: 'Πρωινό' },
  { id: 31, name: 'Τοστ ζαμπόν-τυρί', price: 3.0, category: 'Πρωινό' },
  { id: 32, name: 'Ομελέτα', price: 4.5, category: 'Πρωινό' },
  { id: 33, name: 'Αυγά μάτια', price: 4.0, category: 'Πρωινό' },
  { id: 34, name: 'Γιαούρτι με μέλι και καρύδια', price: 4.0, category: 'Πρωινό' },
    { id: 20, name: 'Μπριζόλα χοιρινή', price: 9.5, category: 'Κυρίως Πιάτα' },
    { id: 21, name: 'Σουβλάκι κοτόπουλο', price: 7.0, category: 'Κυρίως Πιάτα' },
    { id: 22, name: 'Μουσακάς', price: 8.5, category: 'Κυρίως Πιάτα' },
    { id: 23, name: 'Γύρος χοιρινός', price: 7.5, category: 'Κυρίως Πιάτα' },
    { id: 24, name: 'Παϊδάκια αρνίσια', price: 12.0, category: 'Κυρίως Πιάτα' }
  ];

  categories: string[] = [];

  ngOnInit(): void {
    this.categories = this.getCategories();
  }

  getCategories(): string[] {
    return Array.from(new Set(this.menuItems.map(item => item.category)));
  }

  getItemsByCategory(category: string): MenuItem[] {
    return this.menuItems.filter(item => item.category === category);
  }

}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}
