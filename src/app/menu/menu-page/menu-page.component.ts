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
    { id: 1, name: 'Freddo espresso', price: 3.5, category: 'COFFEES' },
    { id: 2, name: 'Freddo cappuccino', price: 4, category: 'COFFEES' },
    { id: 3, name: 'Espresso', price: 3, category: 'COFFEES' },
    { id: 4, name: 'Cappuccino', price: 3.5, category: 'COFFEES' },
    { id: 5, name: 'Americano', price: 3.5, category: 'COFFEES' },
  { id: 6, name: 'HELLENIKOS', price: 2.5, category: 'COFFEES' },
    { id: 7, name: 'CHOCOLATE', price: 4, category: 'COFFEES' },
    { id: 8, name: 'Nescafe', price: 3, category: 'COFFEES' },
  { id: 9, name: 'NESCAFE_FRAPE', price: 3, category: 'COFFEES' },
    { id: 10, name: 'Latte', price: 4.5, category: 'COFFEES' },
  { id: 11, name: 'FILTER_COFFEE', price: 3, category: 'COFFEES' },
  { id: 12, name: 'COCOA', price: 3, category: 'COFFEES' },
    { id: 13, name: 'Macchiato', price: 3.5, category: 'COFFEES' },
  { id: 14, name: 'VIENNESE_CHOCOLATE', price: 4.5, category: 'COFFEES' },

  { id: 15, name: 'FANTA_ORANGE', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 16, name: 'SPRITE', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 17, name: 'FANTA_LEMON', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 18, name: 'COCA_COLA', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 19, name: 'COCA_COLA_ZERO', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 20, name: 'PEACH_TEA', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 21, name: 'LEMON_TEA', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 22, name: 'GREEN_TEA', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 23, name: 'RED_BULL', price: 5, category: 'SOFT_DRINKS' },
  { id: 24, name: 'SODA', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 25, name: 'WATER_SMALL', price: 0.5, category: 'SOFT_DRINKS' },
  { id: 26, name: 'WATER_LARGE', price: 1.5, category: 'SOFT_DRINKS' },
  { id: 27, name: 'PERRIER', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 28, name: 'SCHWEPPES_ORANGE', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 29, name: 'SCHWEPPES_LEMON', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 30, name: 'SCHWEPPES_PINK', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 31, name: 'TONIC', price: 3.5, category: 'SOFT_DRINKS' },
  { id: 32, name: 'THREE_CENTS_PINK', price: 4, category: 'SOFT_DRINKS' },
  { id: 33, name: 'THREE_CENTS_GINGER', price: 4, category: 'SOFT_DRINKS' },
  { id: 34, name: 'HOMEMADE_LEMONADE', price: 6, category: 'SOFT_DRINKS' },
  { id: 35, name: 'HOMEMADE_NINE_FRUITS', price: 6, category: 'SOFT_DRINKS' },
  { id: 36, name: 'HOMEMADE_CHERRY', price: 6, category: 'SOFT_DRINKS' },
  { id: 37, name: 'HOMEMADE_PEACH', price: 6, category: 'SOFT_DRINKS' },
  { id: 38, name: 'HOMEMADE_PINK_LEMONADE', price: 6, category: 'SOFT_DRINKS' },
  { id: 39, name: 'HOMEMADE_GREEN_APPLE_POMEGRANATE', price: 6, category: 'SOFT_DRINKS' },

  { id: 40, name: 'FRESH_JUICE', price: 5, category: 'JUICES' },
  { id: 41, name: 'ORANGE_JUICE', price: 3.5, category: 'JUICES' },
  { id: 42, name: 'MIXED_JUICE', price: 3.5, category: 'JUICES' },
  { id: 43, name: 'SOUR_CHERRY_JUICE', price: 3.5, category: 'JUICES' },
  { id: 44, name: 'BANANA_JUICE', price: 3.5, category: 'JUICES' },
  { id: 45, name: 'APPLE_JUICE', price: 3.5, category: 'JUICES' },
  { id: 46, name: 'PINEAPPLE_JUICE', price: 3.5, category: 'JUICES' },
  { id: 47, name: 'APRICOT_JUICE', price: 3.5, category: 'JUICES' },
  { id: 48, name: 'PEACH_JUICE', price: 3.5, category: 'JUICES' },
  { id: 49, name: 'MANDARIN_JUICE', price: 3.5, category: 'JUICES' },
  { id: 50, name: 'STRAWBERRY_JUICE', price: 3.5, category: 'JUICES' },

  { id: 1, name: 'TOAST', price: 3.5, category: 'TOASTS_CREPS' },
  { id: 2, name: 'SAVORY_CREPE', price: 4, category: 'TOASTS_CREPS' },
  { id: 3, name: 'SWEET_CREPE', price: 4, category: 'TOASTS_CREPS' },

  { id: 4, name: 'BARREL_SMALL', price: 4, category: 'BEERS' },
  { id: 5, name: 'BARREL_LARGE', price: 5, category: 'BEERS' },
  { id: 6, name: 'KAISER', price: 4, category: 'BEERS' },
  { id: 7, name: 'RADLER', price: 4, category: 'BEERS' },
  { id: 8, name: 'ALFA', price: 4, category: 'BEERS' },
  { id: 9, name: 'MYTHOS', price: 4, category: 'BEERS' },
  { id: 10, name: 'HEINEKEN', price: 4, category: 'BEERS' },
  { id: 11, name: 'AMSTEL', price: 4, category: 'BEERS' },
  { id: 12, name: 'CORONA', price: 6, category: 'BEERS' },
  { id: 13, name: 'VERGINA', price: 4, category: 'BEERS' },
  { id: 14, name: 'VERGINA_WEISS', price: 6, category: 'BEERS' },
  { id: 15, name: 'VERGINA_RED', price: 6, category: 'BEERS' },
  { id: 16, name: 'VERGINA_ZERO', price: 4, category: 'BEERS' },
  { id: 17, name: 'FIX_DARK', price: 4, category: 'BEERS' },
  { id: 18, name: 'HEINEKEN_ZERO', price: 4, category: 'BEERS' },
  { id: 19, name: 'SEVEN_SEALS', price: 5, category: 'BEERS' },

  { id: 20, name: 'DRINK_SIMPLE', price: 7, category: 'DRINKS_WINES' },
  { id: 21, name: 'DRINK_SPECIAL', price: 8, category: 'DRINKS_WINES' },
  { id: 22, name: 'DRINK_PREMIUM', price: 10, category: 'DRINKS_WINES' },
  { id: 23, name: 'WINE_GLASS', price: 6, category: 'DRINKS_WINES' },
  { id: 24, name: 'SHOT', price: 3, category: 'DRINKS_WINES' },
  { id: 25, name: 'RETSINA_VASILIKI', price: 6, category: 'DRINKS_WINES' },
  { id: 26, name: 'BIANCO_NERO_WHITE', price: 6, category: 'DRINKS_WINES' },
  { id: 27, name: 'BIANCO_NERO_SPARKLING', price: 6, category: 'DRINKS_WINES' },
  { id: 28, name: 'BIANCO_NERO_SPARKLING_ROSE', price: 6, category: 'DRINKS_WINES' },
  { id: 29, name: 'LEIVADIOTI_BOTTLE', price: 6, category: 'DRINKS_WINES' },
  { id: 30, name: 'GORDONS_SPACE', price: 5, category: 'DRINKS_WINES' },
  { id: 31, name: 'PARANGA_BOTTLE', price: 30, category: 'DRINKS_WINES' },
  { id: 32, name: 'SAMAROPETRA_BOTTLE', price: 35, category: 'DRINKS_WINES' },

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

  { id: 51, name: 'OMELETTE', price: 7, category: 'BREAKFAST' },
  { id: 52, name: 'SCRAMBLED_EGGS', price: 6, category: 'BREAKFAST' },
  { id: 53, name: 'SCRAMBLED_EGGS_SALMON', price: 7, category: 'BREAKFAST' },
  { id: 54, name: 'FRENCH_TOAST_SIMPLE', price: 5, category: 'BREAKFAST' },
  { id: 55, name: 'FRENCH_TOAST_HONEY_CINNAMON', price: 6, category: 'BREAKFAST' },
  { id: 56, name: 'PANCAKE_PRALINE', price: 7, category: 'BREAKFAST' },
  { id: 57, name: 'PANCAKE_HONEY_CINNAMON', price: 7, category: 'BREAKFAST' },
  { id: 58, name: 'PANCAKE_PRALINE_BANANA_HAZELNUT', price: 9, category: 'BREAKFAST' },
  { id: 59, name: 'FRIED_EGGS_BACON', price: 6, category: 'BREAKFAST' },
  { id: 60, name: 'YOGURT_HONEY_WALNUTS', price: 5, category: 'BREAKFAST' },
  { id: 61, name: 'YOGURT_HONEY_WALNUTS_FRUITS', price: 6, category: 'BREAKFAST' },

  { id: 62, name: 'CLUB_SANDWICH', price: 9, category: 'CLUB_SANDWICH' },
  { id: 63, name: 'CLUB_SANDWICH_CAESAR_CHICKEN', price: 11, category: 'CLUB_SANDWICH' },
  { id: 64, name: 'CLUB_SANDWICH_GYRO', price: 11, category: 'CLUB_SANDWICH' },
  { id: 65, name: 'CLUB_SANDWICH_PANSETSA', price: 12, category: 'CLUB_SANDWICH' },

  { id: 66, name: 'JUNIOR_1', price: 7.5, category: 'JUNIOR_MENU' },
  { id: 67, name: 'JUNIOR_2', price: 7.5, category: 'JUNIOR_MENU' },

  { id: 68, name: 'OUZO_GLASS', price: 3, category: 'OUZO_MEZE' },
  { id: 69, name: 'MEZE', price: 3, category: 'OUZO_MEZE' },
  { id: 70, name: 'OUZO_BOTTLE', price: 6, category: 'OUZO_MEZE' },
  { id: 71, name: 'APOSTOLAKI', price: 10, category: 'OUZO_MEZE' },

  // Pinsa
  { id: 72, name: 'PINSA_SIMPLE', price: 11, category: 'PINSA' },
  { id: 73, name: 'PINSA_MARGARITA', price: 11, category: 'PINSA' },
  { id: 74, name: 'PINSA_SPECIAL', price: 12, category: 'PINSA' },
  { id: 75, name: 'PINSA_21', price: 12, category: 'PINSA' },

  // Pasta
  { id: 76, name: 'NAPOLITANA', price: 8, category: 'PASTA' },
  { id: 77, name: 'BOLOGNESE', price: 9, category: 'PASTA' },
  { id: 78, name: 'CARBONARA', price: 9, category: 'PASTA' },
  { id: 79, name: 'PASTA_21', price: 9, category: 'PASTA' },
  { id: 80, name: 'SHRIMP_PASTA', price: 18, category: 'PASTA' },
  { id: 81, name: 'PAPPARDELLE_OX_TAIL', price: 16, category: 'PASTA' },
  { id: 82, name: 'LINGUINI_OCTOPUS', price: 18, category: 'PASTA' },

  // Hot Dogs & Burgers
  { id: 83, name: 'HOT_DOG', price: 6, category: 'HOTDOG_BURGERS' },
  { id: 84, name: 'BURGER_BBQ', price: 9, category: 'HOTDOG_BURGERS' },
  { id: 85, name: 'BURGER_CAESAR', price: 9, category: 'HOTDOG_BURGERS' },
  { id: 86, name: 'BURGER_21', price: 10, category: 'HOTDOG_BURGERS' },
  { id: 87, name: 'DOUBLE_CHEESE_BURGER', price: 10, category: 'HOTDOG_BURGERS' },
  { id: 88, name: 'CHICKEN_CRISPY_BURGER', price: 9, category: 'HOTDOG_BURGERS' },

  // Bao Buns
  { id: 89, name: 'SHRIMP_CHILI_BAO', price: 8, category: 'BAO_BUNS' },
  { id: 90, name: 'NUGGETS_BAO', price: 7, category: 'BAO_BUNS' },
  { id: 91, name: 'PULLED_PORK_BAO', price: 7, category: 'BAO_BUNS' },

  { id: 92, name: 'SALAD_CAESAR', price: 8.5, category: 'SALADS' },
  { id: 93, name: 'SALAD_21', price: 8, category: 'SALADS' },
  { id: 94, name: 'SALAD_CAPRESE', price: 7, category: 'SALADS' },
  { id: 95, name: 'SALAD_KOUKOUVAGIA', price: 8, category: 'SALADS' },
  { id: 96, name: 'SALAD_GREEK', price: 8, category: 'SALADS' },
  { id: 97, name: 'CHEESE_PLATTER', price: 12, category: 'SALADS' },

  // Main Courses
  { id: 98, name: 'RISOTTO_MUSHROOM', price: 15, category: 'MAIN_COURSES' },
  { id: 99, name: 'PORK_PANSETTO', price: 15, category: 'MAIN_COURSES' },
  { id: 100, name: 'TORTILLA_PORK_GYRO', price: 6, category: 'MAIN_COURSES' },
  { id: 101, name: 'CHICKEN_NUGGETS', price: 11, category: 'MAIN_COURSES' },
  { id: 102, name: 'CHICKEN_NUGGETS_A_LA_CREME', price: 12, category: 'MAIN_COURSES' },
  { id: 103, name: 'FRIED_CALAMARI', price: 12, category: 'MAIN_COURSES' },
  { id: 104, name: 'SALMON_TERIYAKI', price: 18, category: 'MAIN_COURSES' },
  { id: 105, name: 'CHICKEN_THIGH', price: 11, category: 'MAIN_COURSES' },
  { id: 106, name: 'BEEF_PATTY', price: 11, category: 'MAIN_COURSES' },
  { id: 107, name: 'PORK_GYRO', price: 11, category: 'MAIN_COURSES' },
  { id: 108, name: 'MIX_GRILL', price: 17, category: 'MAIN_COURSES' },
  { id: 109, name: 'FRIES_PORTION', price: 5, category: 'MAIN_COURSES' }
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
