import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './Demo/view/to-do-list/to-do-list.component';
import { HeaderComponent } from './Demo/view/header/header.component';
import { FooterComponent } from './Demo/view/footer/footer.component';
import { BodyComponent } from './Demo/view/body/body.component';
import { HeroComponent } from './Demo/view/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
