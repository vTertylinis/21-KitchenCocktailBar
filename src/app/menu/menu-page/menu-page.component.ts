import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-page',
  standalone: false,
  templateUrl: './menu-page.component.html',
  styleUrl: './menu-page.component.css',
})
export class MenuPageComponent {
selectedItem: any = null;
isModalOpen = false;

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
  { id: 2, name: 'SAVORY_CREPE', price: 4, category: 'TOASTS_CREPS',image:'https://21images.s3.eu-north-1.amazonaws.com/almiri.jpg' },
  { id: 3, name: 'SWEET_CREPE', price: 4, category: 'TOASTS_CREPS',image:'https://21images.s3.eu-north-1.amazonaws.com/glykia.jpg' },

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
    { id: 46, name: 'Yuzi gun', price: 11, category: 'Cocktails',description:'Gin, pure yuzu, lemon juice, pink grapefruit soda, cinnamon' },
    { id: 47, name: 'Cucu splash', price: 11, category: 'Cocktails',description:'Gin, lemon juice, cucumber liquer, falernum, ginger beer' },
    { id: 48, name: 'Passion paradise', price: 11, category: 'Cocktails',description:'Vodka, pure strawberry, pure passion fruit, lemon juice' },
    { id: 49, name: 'Green Apple Perfume', price: 11, category: 'Cocktails',description:'White rum, green apple liquer, falernum, lemon juice' },
    { id: 50, name: "Bartender's choice", price: 10, category: 'Cocktails' },

  { id: 51, name: 'OMELETTE', price: 7, category: 'BREAKFAST',image:'https://21images.s3.eu-north-1.amazonaws.com/omeleta.png', description:'OMELETTE_DESC' },
  { id: 52, name: 'SCRAMBLED_EGGS', price: 6, category: 'BREAKFAST',description:'SCRAMBLED_EGGS_DESC', image:'https://21images.s3.eu-north-1.amazonaws.com/scrable.jpg' },
  { id: 53, name: 'SCRAMBLED_EGGS_SALMON', price: 7, category: 'BREAKFAST',description:'SCRAMBLED_EGGS_SALMON_DESC' },
  { id: 54, name: 'FRENCH_TOAST_SIMPLE', price: 5,image:'https://21images.s3.eu-north-1.amazonaws.com/frenchtoast.png', category: 'BREAKFAST' },
  { id: 55, name: 'FRENCH_TOAST_HONEY_CINNAMON', price: 6, category: 'BREAKFAST' },
  { id: 56, name: 'PANCAKE_PRALINE', price: 7, category: 'BREAKFAST' },
  { id: 57, name: 'PANCAKE_HONEY_CINNAMON', price: 7, category: 'BREAKFAST' },
  { id: 58, name: 'PANCAKE_PRALINE_BANANA_HAZELNUT', price: 9, category: 'BREAKFAST' },
  { id: 59, name: 'FRIED_EGGS_BACON', price: 6, category: 'BREAKFAST',image:'https://21images.s3.eu-north-1.amazonaws.com/2auga.jpg' },
  { id: 60, name: 'YOGURT_HONEY_WALNUTS', price: 5, category: 'BREAKFAST' },
  { id: 61, name: 'YOGURT_HONEY_WALNUTS_FRUITS', price: 6, category: 'BREAKFAST' },

   { id: 62, name: 'CLUB_SANDWICH', price: 9, category: 'CLUB_SANDWICH', description:'CLUB_SANDWICH_DESC' },
  { id: 63, name: 'CLUB_SANDWICH_CAESAR_CHICKEN', price: 11, category: 'CLUB_SANDWICH', description:'CLUB_SANDWICH_CAESAR_CHICKEN_DESC' },
  { id: 64, name: 'CLUB_SANDWICH_GYRO', price: 11, category: 'CLUB_SANDWICH', description:'CLUB_SANDWICH_GYRO_DESC',image:'https://21images.s3.eu-north-1.amazonaws.com/gyrosclub.jpg' },
  { id: 65, name: 'CLUB_SANDWICH_PANSETSA', price: 12, category: 'CLUB_SANDWICH', image:'https://21images.s3.eu-north-1.amazonaws.com/clubpanseta.png', description:'CLUB_SANDWICH_PANSETSA_DESC' },

  { id: 66, name: 'JUNIOR_1', price: 7.5, category: 'JUNIOR_MENU', description:'JUNIOR_1_DESC' },
  { id: 67, name: 'JUNIOR_2', price: 7.5, category: 'JUNIOR_MENU', description:'JUNIOR_2_DESC' },

  { id: 68, name: 'OUZO_GLASS', price: 3, category: 'OUZO_MEZE' },
  { id: 69, name: 'MEZE', price: 3, category: 'OUZO_MEZE' },
  { id: 70, name: 'OUZO_BOTTLE', price: 6, category: 'OUZO_MEZE' },
  { id: 71, name: 'APOSTOLAKI', price: 10, category: 'OUZO_MEZE' },

  // Pinsa
  { id: 72, name: 'PINSA_SIMPLE', price: 11, category: 'PINSA', image:'https://21images.s3.eu-north-1.amazonaws.com/pinsaapli.png', description:'PINSA_SIMPLE_DESC' },
  { id: 73, name: 'PINSA_MARGARITA', price: 11, category: 'PINSA', description:'PINSA_MARGARITA_DESC' },
  { id: 74, name: 'PINSA_SPECIAL', price: 12, category: 'PINSA', description:'PINSA_SPECIAL_DESC' },
  { id: 75, name: 'PINSA_21', price: 12, category: 'PINSA', image:'https://21images.s3.eu-north-1.amazonaws.com/pinsa21.png', description:'PINSA_21_DESC' },

  { id: 76, name: 'NAPOLITANA', price: 8, category: 'PASTA', description:'NAPOLITANA_DESC' },
  { id: 77, name: 'BOLOGNESE', price: 9, category: 'PASTA', description:'BOLOGNESE_DESC' },
  { id: 78, name: 'CARBONARA', price: 9, category: 'PASTA', description:'CARBONARA_DESC' },
  { id: 79, name: 'PASTA_21', price: 9, category: 'PASTA', description:'PASTA_21_DESC', image:'https://21images.s3.eu-north-1.amazonaws.com/pasta21.jpg' },
  { id: 80, name: 'SHRIMP_PASTA', price: 18, category: 'PASTA', image:'https://21images.s3.eu-north-1.amazonaws.com/garidomakaronada.png', description:'SHRIMP_PASTA_DESC' },
  { id: 81, name: 'PAPPARDELLE_OX_TAIL', price: 16, category: 'PASTA', image:'https://21images.s3.eu-north-1.amazonaws.com/papardelaragou.png', description:'PAPPARDELLE_OX_TAIL_DESC' },
  { id: 82, name: 'RISOTI', price: 18, category: 'PASTA', description:'RISOTI_DESC' },
  { id: 83, name: 'LINGUINI_OCTOPUS', price: 18, category: 'PASTA', description:'LINGUINI_OCTOPUS_DESC' },
  { id: 98, name: 'RISOTTO_MUSHROOM', price: 15, category: 'PASTA' },


  { id: 84, name: 'HOT_DOG', price: 6, category: 'HOTDOG_BURGERS', description:'HOT_DOG_DESC' },
  { id: 85, name: 'BURGER_BBQ', price: 9, category: 'HOTDOG_BURGERS', description:'BURGER_BBQ_DESC' },
  { id: 86, name: 'BURGER_CAESAR', price: 9, category: 'HOTDOG_BURGERS', description:'BURGER_CAESAR_DESC' },
  { id: 87, name: 'BURGER_21', price: 10, category: 'HOTDOG_BURGERS', image:'https://21images.s3.eu-north-1.amazonaws.com/burger.png', description:'BURGER_21_DESC' },
  { id: 88, name: 'DOUBLE_CHEESE_BURGER', price: 10, category: 'HOTDOG_BURGERS', description:'DOUBLE_CHEESE_BURGER_DESC' },
  { id: 89, name: 'CHICKEN_CRISPY_BURGER', price: 9, category: 'HOTDOG_BURGERS', description:'CHICKEN_CRISPY_BURGER_DESC',image:'https://21images.s3.eu-north-1.amazonaws.com/crispyburger.jpg' },

  // Bao Buns
  { id: 89, name: 'SHRIMP_CHILI_BAO', price: 8, category: 'BAO_BUNS', image: 'https://21images.s3.eu-north-1.amazonaws.com/garida.png', description: 'SHRIMP_CHILI_BAO_DESC' },
  { id: 90, name: 'NUGGETS_BAO', price: 7, category: 'BAO_BUNS', image: 'https://21images.s3.eu-north-1.amazonaws.com/baogarida.png', description: 'NUGGETS_BAO_DESC' },
  { id: 91, name: 'PULLED_PORK_BAO', price: 7, category: 'BAO_BUNS', image: 'https://21images.s3.eu-north-1.amazonaws.com/pull.png', description: 'PULLED_PORK_BAO_DESC' },

  { id: 92, name: 'SALAD_CAESAR', price: 8.5, category: 'SALADS', description: 'SALAD_CAESAR_DESC' },
  { id: 93, name: 'SALAD_21', price: 8, category: 'SALADS', image: 'https://21images.s3.eu-north-1.amazonaws.com/salata.png', description: 'SALAD_21_DESC' },
  { id: 94, name: 'SALAD_CAPRESE', price: 7, category: 'SALADS', description: 'SALAD_CAPRESE_DESC' },
  { id: 95, name: 'SALAD_KOUKOUVAGIA', price: 8, category: 'SALADS', description: 'SALAD_KOUKOUVAGIA_DESC' },
  { id: 96, name: 'SALAD_GREEK', price: 8, category: 'SALADS', description: 'SALAD_GREEK_DESC' },
  { id: 97, name: 'CHEESE_PLATTER', price: 12, category: 'SALADS', description: 'CHEESE_PLATTER_DESC' },

  // Main Courses
  { id: 99, name: 'PORK_PANSETTO', price: 15, category: 'MAIN_COURSES', description: 'PORK_PANSETTO_DESC',image:'https://21images.s3.eu-north-1.amazonaws.com/mprizola.jpg' },
  { id: 100, name: 'TORTILLA_PORK_GYRO', price: 6, category: 'MAIN_COURSES', description: 'TORTILLA_PORK_GYRO_DESC' },
  { id: 101, name: 'CHICKEN_NUGGETS', price: 11, category: 'MAIN_COURSES', image: 'https://21images.s3.eu-north-1.amazonaws.com/nuggets.jpg', description: 'CHICKEN_NUGGETS_DESC' },
  { id: 102, name: 'CHICKEN_NUGGETS_A_LA_CREME', price: 12, category: 'MAIN_COURSES', image: 'https://21images.s3.eu-north-1.amazonaws.com/alacreme.png', description: 'CHICKEN_NUGGETS_A_LA_CREME_DESC' },
  { id: 103, name: 'FRIED_CALAMARI', price: 12, category: 'MAIN_COURSES', image: 'https://21images.s3.eu-north-1.amazonaws.com/kalamari.png', description: 'FRIED_CALAMARI_DESC' },
  { id: 104, name: 'SALMON_TERIYAKI', price: 18, category: 'MAIN_COURSES', image: 'https://21images.s3.eu-north-1.amazonaws.com/solomos.png', description: 'SALMON_TERIYAKI_DESC' },
  { id: 105, name: 'CHICKEN_THIGH', price: 11, category: 'MAIN_COURSES', description: 'CHICKEN_THIGH_DESC' },
  { id: 106, name: 'BEEF_PATTY', price: 11, category: 'MAIN_COURSES', description: 'BEEF_PATTY_DESC' },
  { id: 107, name: 'PORK_GYRO', price: 11, category: 'MAIN_COURSES', description: 'PORK_GYRO_DESC' },
  { id: 108, name: 'MIX_GRILL', price: 17, category: 'MAIN_COURSES', description: 'MIX_GRILL_DESC' },
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

  showItemInfo(item: any) {
  this.selectedItem = item;
  this.isModalOpen = true;
}

closeModal() {
  this.isModalOpen = false;
}

scrollToCategory(category: string) {
  const element = document.getElementById(category);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image?:string;
  description? :string;
}
