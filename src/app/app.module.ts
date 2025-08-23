import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { TranslatePipe } from "./pipes/translate.pipe";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MenuModule,
    TranslatePipe
],
  bootstrap: [AppComponent]
})
export class AppModule { }
