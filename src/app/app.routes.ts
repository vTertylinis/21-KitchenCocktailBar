import { Routes } from '@angular/router';
import { HomeComponent } from './menu/home/home.component';
import { AboutUsComponent } from './menu/about-us/about-us.component';
import { MenuPageComponent } from './menu/menu-page/menu-page.component';
import { ContactComponent } from './menu/contact/contact.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } 
];
