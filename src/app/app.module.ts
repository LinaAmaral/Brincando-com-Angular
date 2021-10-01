import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JogoComponent, JogoBotaoComponent, JogoService } from './jogo';


@NgModule({
  declarations: [
    AppComponent,
    JogoComponent,
    JogoBotaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    JogoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
