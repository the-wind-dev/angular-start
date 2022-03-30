import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { AppDirectiveDirective } from './app-directive.directive';
import { CurrencyPipe } from './currency.pipe';

import { HelloComponent } from './hello.component';
import { TimerService } from './timer.service';

import { DOCUMENT, SET_INTERVAL } from './token'

import { ReactiveFormsModule } from '@angular/forms';
// import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProductFormComponent } from './product-form/product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    AppDirectiveDirective,
    CurrencyPipe,
    HelloComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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


