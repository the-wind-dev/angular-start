import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AppDirectiveDirective } from './app-directive.directive';
import { CurrencyPipe } from './currency.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AppDirectiveDirective,
    CurrencyPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
