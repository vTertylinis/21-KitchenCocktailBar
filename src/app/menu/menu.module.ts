import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    MenuPageComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MenuModule { }
