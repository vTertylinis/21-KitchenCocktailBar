import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  standalone: false,
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css',
})
export class MenuPageComponent {
  searchTerm: string = '';

  menuItems: MenuItem[] = [
    { id: 1, name: 'Freddo espresso', price: 3.5, category: 'Καφέδες' },
    { id: 2, name: 'Freddo cappuccino', price: 4, category: 'Καφέδες' },
    { id: 3, name: 'Espresso', price: 3, category: 'Καφέδες' },
    { id: 4, name: 'Cappuccino', price: 3.5, category: 'Καφέδες' },
    { id: 5, name: 'Americano', price: 3.5, category: 'Καφέδες' },
    { id: 6, name: 'Ελληνικός', price: 2.5, category: 'Καφέδες' },
    { id: 7, name: 'Σοκολάτα', price: 4, category: 'Καφέδες' },
    { id: 8, name: 'Nescafe', price: 3, category: 'Καφέδες' },
    { id: 9, name: 'Nescafe φραπέ', price: 3, category: 'Καφέδες' },
    { id: 10, name: 'Latte', price: 4.5, category: 'Καφέδες' },
    { id: 11, name: 'Καφές φίλτρου', price: 3, category: 'Καφέδες' },
    { id: 12, name: 'Κακάο', price: 3, category: 'Καφέδες' },
    { id: 13, name: 'Macchiato', price: 3.5, category: 'Καφέδες' },
    { id: 14, name: 'Σοκολάτα βιενουά', price: 4.5, category: 'Καφέδες' },

    { id: 15, name: 'Fanta Πορτοκαλάδα', price: 3.5, category: 'Αναψυκτικά' },
    { id: 16, name: 'Sprite', price: 3.5, category: 'Αναψυκτικά' },
    { id: 17, name: 'Fanta Λεμονάδα', price: 3.5, category: 'Αναψυκτικά' },
    { id: 18, name: 'Coca Cola', price: 3.5, category: 'Αναψυκτικά' },
    { id: 19, name: 'Coca Cola Zero', price: 3.5, category: 'Αναψυκτικά' },
    { id: 20, name: 'Τσάι Ροδάκινο', price: 3.5, category: 'Αναψυκτικά' },
    { id: 21, name: 'Τσάι Λεμόνι', price: 3.5, category: 'Αναψυκτικά' },
    { id: 22, name: 'Τσάι Πράσινο', price: 3.5, category: 'Αναψυκτικά' },
    { id: 23, name: 'Red Bull', price: 5, category: 'Αναψυκτικά' },
    { id: 24, name: 'Σόδα', price: 3.5, category: 'Αναψυκτικά' },
    { id: 25, name: 'Νερό Μικρό', price: 0.5, category: 'Αναψυκτικά' },
    { id: 26, name: 'Νερό Μεγάλο', price: 1.5, category: 'Αναψυκτικά' },
    { id: 27, name: 'Perrier', price: 3.5, category: 'Αναψυκτικά' },
    { id: 28, name: 'Schweppes Πορτοκάλι', price: 3.5, category: 'Αναψυκτικά' },
    { id: 29, name: 'Schweppes Λεμόνι', price: 3.5, category: 'Αναψυκτικά' },
    { id: 30, name: 'Schweppes Pink', price: 3.5, category: 'Αναψυκτικά' },
    { id: 31, name: 'Tonic', price: 3.5, category: 'Αναψυκτικά' },
    { id: 32, name: '3 cents Pink', price: 4, category: 'Αναψυκτικά' },
    { id: 33, name: '3 cents Ginger', price: 4, category: 'Αναψυκτικά' },
    { id: 34, name: 'Σπιτική Λεμονάδα', price: 6, category: 'Αναψυκτικά' },
    { id: 35, name: 'Σπιτική 9 Φρούτα', price: 6, category: 'Αναψυκτικά' },
    { id: 36, name: 'Σπιτική Κερασάδα', price: 6, category: 'Αναψυκτικά' },
    { id: 37, name: 'Σπιτική Ροδακινάδα', price: 6, category: 'Αναψυκτικά' },
    { id: 38, name: 'Σπιτική Ροζ Λεμονάδα', price: 6, category: 'Αναψυκτικά' },
    {
      id: 39,
      name: 'Σπιτική Πράσινο Μήλο - Ρόδι',
      price: 6,
      category: 'Αναψυκτικά',
    },

    { id: 40, name: 'Φυσικός Χυμός', price: 5, category: 'Χυμοί' },
    { id: 41, name: 'Χυμός Πορτοκάλι', price: 3.5, category: 'Χυμοί' },
    { id: 42, name: 'Χυμός Ανάμεικτος', price: 3.5, category: 'Χυμοί' },
    { id: 43, name: 'Χυμός Βύσσινο', price: 3.5, category: 'Χυμοί' },
    { id: 44, name: 'Χυμός Μπανάνα', price: 3.5, category: 'Χυμοί' },
    { id: 45, name: 'Χυμός Μήλο', price: 3.5, category: 'Χυμοί' },
    { id: 46, name: 'Χυμός Ανάνα', price: 3.5, category: 'Χυμοί' },
    { id: 47, name: 'Χυμός Βερίκοκο', price: 3.5, category: 'Χυμοί' },
    { id: 48, name: 'Χυμός Ροδάκινο', price: 3.5, category: 'Χυμοί' },
    { id: 49, name: 'Χυμός Μανταρίνι', price: 3.5, category: 'Χυμοί' },
    { id: 50, name: 'Χυμός Φράουλα', price: 3.5, category: 'Χυμοί' },

    { id: 1, name: 'Τοστ', price: 3.5, category: 'Τοστ - Κρέπες' },
    { id: 2, name: 'Κρέπα αλμυρή', price: 4, category: 'Τοστ - Κρέπες' },
    { id: 3, name: 'Κρέπα γλυκιά', price: 4, category: 'Τοστ - Κρέπες' },

    { id: 4, name: 'Βαρέλι Μικρό', price: 4, category: 'Μπύρες' },
    { id: 5, name: 'Βαρέλι Μεγάλο', price: 5, category: 'Μπύρες' },
    { id: 6, name: 'Kaiser', price: 4, category: 'Μπύρες' },
    { id: 7, name: 'Radler', price: 4, category: 'Μπύρες' },
    { id: 8, name: 'Άλφα', price: 4, category: 'Μπύρες' },
    { id: 9, name: 'Μύθος', price: 4, category: 'Μπύρες' },
    { id: 10, name: 'Heineken', price: 4, category: 'Μπύρες' },
    { id: 11, name: 'Amstel', price: 4, category: 'Μπύρες' },
    { id: 12, name: 'Corona', price: 6, category: 'Μπύρες' },
    { id: 13, name: 'Βεργίνα', price: 4, category: 'Μπύρες' },
    { id: 14, name: 'Βεργίνα Weiss', price: 6, category: 'Μπύρες' },
    { id: 15, name: 'Βεργίνα Red', price: 6, category: 'Μπύρες' },
    { id: 16, name: 'Βεργίνα 0%', price: 4, category: 'Μπύρες' },
    { id: 17, name: 'Fix dark', price: 4, category: 'Μπύρες' },
    { id: 18, name: 'Heineken 0%', price: 4, category: 'Μπύρες' },
    { id: 19, name: 'Seven Seals', price: 5, category: 'Μπύρες' },

    { id: 20, name: 'Ποτό Απλό', price: 7, category: 'Ποτά - Κρασιά' },
    { id: 21, name: 'Ποτό Σπέσιαλ', price: 8, category: 'Ποτά - Κρασιά' },
    { id: 22, name: 'Ποτό Πρίμιουμ', price: 10, category: 'Ποτά - Κρασιά' },
    { id: 23, name: 'Κρασί ποτήρι', price: 6, category: 'Ποτά - Κρασιά' },
    { id: 24, name: 'Σφηνάκι', price: 3, category: 'Ποτά - Κρασιά' },
    { id: 25, name: 'Ρετσίνα Βασιλική', price: 6, category: 'Ποτά - Κρασιά' },
    { id: 26, name: 'Bianco Νero λευκό', price: 6, category: 'Ποτά - Κρασιά' },
    {
      id: 27,
      name: 'Bianco Nero αφρώδες',
      price: 6,
      category: 'Ποτά - Κρασιά',
    },
    {
      id: 28,
      name: 'Bianco Nero αφρώδες Ροζέ',
      price: 6,
      category: 'Ποτά - Κρασιά',
    },
    {
      id: 29,
      name: 'Λειβαδιώτη μπουκαλάκι',
      price: 6,
      category: 'Ποτά - Κρασιά',
    },
    { id: 30, name: 'Gordons Space', price: 5, category: 'Ποτά - Κρασιά' },
    { id: 31, name: 'Παράγκα Μπουκάλι', price: 30, category: 'Ποτά - Κρασιά' },
    {
      id: 32,
      name: 'Σαμαρόπετρα Μπουκάλι',
      price: 35,
      category: 'Ποτά - Κρασιά',
    },

    { id: 33, name: 'Sex on the beach', price: 10, category: 'Cocktails' },
    { id: 34, name: 'Caipiroska', price: 10, category: 'Cocktails' },
    { id: 35, name: 'Daiquiri', price: 10, category: 'Cocktails' },
    { id: 36, name: 'Zombie', price: 10, category: 'Cocktails' },
    { id: 37, name: 'Mojito', price: 10, category: 'Cocktails' },
    { id: 38, name: 'Cosmopolitan', price: 10, category: 'Cocktails' },
    { id: 39, name: 'Margarita', price: 10, category: 'Cocktails' },
    { id: 40, name: 'Caipirinha', price: 10, category: 'Cocktails' },
    { id: 41, name: 'Negroni', price: 10, category: 'Cocktails' },
    { id: 42, name: 'Aperol spritz', price: 10, category: 'Cocktails' },
    { id: 43, name: 'Mai tai', price: 10, category: 'Cocktails' },
    { id: 44, name: 'Long island', price: 10, category: 'Cocktails' },
    { id: 45, name: 'Pina colada', price: 10, category: 'Cocktails' },
    { id: 46, name: 'Yuzi gun', price: 11, category: 'Cocktails' },
    { id: 47, name: 'Cucu splash', price: 11, category: 'Cocktails' },
    { id: 48, name: 'Passion paradise', price: 11, category: 'Cocktails' },
    { id: 49, name: 'Green Apple Perfume', price: 11, category: 'Cocktails' },
    { id: 50, name: "Bartender's choice", price: 10, category: 'Cocktails' },

    { id: 51, name: 'Ομελέτα', price: 7, category: 'Πρωινό' },
    { id: 52, name: 'Αυγά σκραμπλ', price: 6, category: 'Πρωινό' },
    { id: 53, name: 'Αυγά σκραμπλ Με Σολομό', price: 7, category: 'Πρωινό' },
    { id: 54, name: 'French toast Απλό', price: 5, category: 'Πρωινό' },
    {
      id: 55,
      name: 'French toast με μελί και κανέλα',
      price: 6,
      category: 'Πρωινό',
    },
    { id: 56, name: 'Pan cake Πραλίνα', price: 7, category: 'Πρωινό' },
    { id: 57, name: 'Pan cake Μέλι Κανέλα', price: 7, category: 'Πρωινό' },
    {
      id: 58,
      name: 'Pan cake Πραλίνα Μπανάνα Φουντούκια',
      price: 9,
      category: 'Πρωινό',
    },
    {
      id: 59,
      name: '2 αυγά τηγανητά με μπέικον και φρυγανιασμένο ψωμί',
      price: 6,
      category: 'Πρωινό',
    },
    {
      id: 60,
      name: 'Γιαούρτι με μέλι και καρύδια',
      price: 5,
      category: 'Πρωινό',
    },
    {
      id: 61,
      name: 'Γιαούρτι με μέλι και καρύδια + Φρούτα',
      price: 6,
      category: 'Πρωινό',
    },

    { id: 62, name: 'Club sandwich', price: 9, category: 'Club sandwich' },
    {
      id: 63,
      name: 'Club Sandwich Caesar Κοτόπουλο',
      price: 11,
      category: 'Club sandwich',
    },
    {
      id: 64,
      name: 'Club Sandwich με Γύρο',
      price: 11,
      category: 'Club sandwich',
    },
    { id: 65, name: 'Club πανσέτας', price: 12, category: 'Club sandwich' },

    { id: 66, name: 'Junior 1', price: 7.5, category: 'Junior menu' },
    { id: 67, name: 'Junior 2', price: 7.5, category: 'Junior menu' },

    { id: 68, name: 'Ούζο ποτήρι', price: 3, category: 'Ούζο-Μεζέδες' },
    { id: 69, name: 'Μεζέδες', price: 3, category: 'Ούζο-Μεζέδες' },
    { id: 70, name: 'Μπουκάλι Ούζο', price: 6, category: 'Ούζο-Μεζέδες' },
    { id: 71, name: 'Αποστολάκι', price: 10, category: 'Ούζο-Μεζέδες' },

    { id: 72, name: 'Pinsa Απλή', price: 11, category: 'Pinsa' },
    { id: 73, name: 'Pinsa Μαργαρίτα', price: 11, category: 'Pinsa' },
    { id: 74, name: 'Pinsa Special', price: 12, category: 'Pinsa' },
    { id: 75, name: 'Pinsa 21', price: 12, category: 'Pinsa' },

    { id: 76, name: 'Napolitana', price: 8, category: 'Ζυμαρικά' },
    { id: 77, name: 'Bolognesa', price: 9, category: 'Ζυμαρικά' },
    { id: 78, name: 'Carbonara', price: 9, category: 'Ζυμαρικά' },
    { id: 79, name: 'Pasta 21', price: 9, category: 'Ζυμαρικά' },
    { id: 80, name: 'Γαριδομακαρονάδα', price: 18, category: 'Ζυμαρικά' },
    {
      id: 81,
      name: 'Παπαρδέλα ραγού με μοσχαρίσια ουρά',
      price: 16,
      category: 'Ζυμαρικά',
    },
    { id: 82, name: 'Λιγκουίνι χταπόδι', price: 18, category: 'Ζυμαρικά' },

    { id: 83, name: 'Hot dog', price: 6, category: 'Hot dogs - Burgers' },
    { id: 84, name: 'Burger BBQ', price: 9, category: 'Hot dogs - Burgers' },
    { id: 85, name: 'Burger Caesar', price: 9, category: 'Hot dogs - Burgers' },
    { id: 86, name: 'Burger 21', price: 10, category: 'Hot dogs - Burgers' },
    {
      id: 87,
      name: 'Double cheese burger',
      price: 10,
      category: 'Hot dogs - Burgers',
    },
    {
      id: 88,
      name: 'Chicken crispy burger',
      price: 9,
      category: 'Hot dogs - Burgers',
    },

    { id: 89, name: 'Shrimp chili bao', price: 8, category: 'Bao buns' },
    { id: 90, name: 'Nuggets bao', price: 7, category: 'Bao buns' },
    { id: 91, name: 'Pulled pork bao', price: 7, category: 'Bao buns' },

    { id: 92, name: 'Σαλάτα Caesar', price: 8.5, category: 'Σαλάτες' },
    { id: 93, name: 'Σαλάτα 21', price: 8, category: 'Σαλάτες' },
    { id: 94, name: 'Σαλάτα Caprese', price: 7, category: 'Σαλάτες' },
    { id: 95, name: 'Σαλάτα Κουκουβάγια', price: 8, category: 'Σαλάτες' },
    { id: 96, name: 'Σαλάτα χωριάτικη', price: 8, category: 'Σαλάτες' },
    { id: 97, name: 'Ποικιλία τυριών', price: 12, category: 'Σαλάτες' },

    { id: 98, name: 'Ριζότο μανιταριών', price: 15, category: 'Κυρίως πιάτα' },
    {
      id: 99,
      name: 'Χοιρινή Πανσετομπριζόλα',
      price: 15,
      category: 'Κυρίως πιάτα',
    },
    {
      id: 100,
      name: 'Τορτιγια με Γύρο Χοίρινο',
      price: 6,
      category: 'Κυρίως πιάτα',
    },
    {
      id: 101,
      name: 'Κοτοπουλάκια Nuggets',
      price: 11,
      category: 'Κυρίως πιάτα',
    },
    {
      id: 102,
      name: 'Chicken nuggets a la crème',
      price: 12,
      category: 'Κυρίως πιάτα',
    },
    {
      id: 103,
      name: 'Καλαμαράκια τηγανητά',
      price: 12,
      category: 'Κυρίως πιάτα',
    },
    {
      id: 104,
      name: 'Σολομός Tεριγιάκι με Λαχανικά',
      price: 18,
      category: 'Κυρίως πιάτα',
    },
    { id: 105, name: 'Μπούτι κοτόπουλο', price: 11, category: 'Κυρίως πιάτα' },
    { id: 106, name: 'Μπιφτέκι', price: 11, category: 'Κυρίως πιάτα' },
    { id: 107, name: 'Γύρος χοιρινός', price: 11, category: 'Κυρίως πιάτα' },
    { id: 108, name: 'Mix grill', price: 17, category: 'Κυρίως πιάτα' },
    { id: 109, name: 'Μερίδα Πατάτες', price: 5, category: 'Κυρίως πιάτα' },
  ];

  categories: string[] = [];

  ngOnInit(): void {
    this.categories = this.getCategories();
  }

  getCategories(): string[] {
    return Array.from(new Set(this.menuItems.map((item) => item.category)));
  }

  getItemsByCategory(category: string): MenuItem[] {
    return this.menuItems.filter((item) => item.category === category);
  }
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}
