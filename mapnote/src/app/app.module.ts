import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AppDirectiveDirective } from './app-directive.directive';
import { CurrencyPipe } from './currency.pipe';

import { HelloComponent } from './hello.component';
import { TimerService } from './timer.service';

import { DOCUMENT, SET_INTERVAL } from './token'


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AppDirectiveDirective,
    CurrencyPipe,
    HelloComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    TimerService,
    {
      provide: DOCUMENT,
      useValue: document,
    },
    {
      provide: SET_INTERVAL,
      useValue: setInterval,
    },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}


