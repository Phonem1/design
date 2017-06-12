import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavcontrolsComponent } from './navcontrols/navcontrols.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavcontrolsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
