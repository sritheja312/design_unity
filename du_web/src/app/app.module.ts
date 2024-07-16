import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FlooringComponent } from './flooring/flooring.component';
import { PainterComponent } from './painter/painter.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FlooringComponent,
    PainterComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
