import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SYSFORUMTEMAComponent } from './sysforum-tema/sysforum-tema.component';

@NgModule({
  declarations: [
    AppComponent,
    SYSFORUMTEMAComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
