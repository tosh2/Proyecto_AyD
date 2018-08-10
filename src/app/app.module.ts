import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SYSFORUMTEMAComponent } from './sysforum-tema/sysforum-tema.component';

import {environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';

import {ServicioTemaService} from './sysforum-services/servicio-tema.service';

import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    SYSFORUMTEMAComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase, 'angular-fs')
  ],
  providers: [
    ServicioTemaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
