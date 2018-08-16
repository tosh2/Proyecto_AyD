import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SYSFORUMTEMAComponent } from './sysforum-tema/sysforum-tema.component';

import {environment} from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';

import {ServicioTemaService} from './sysforum-services/servicio-tema.service';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';

import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SysforumListaTemasComponent } from './sysforum-lista-temas/sysforum-lista-temas.component';
import { SysforumVerTemaComponent } from './sysforum-ver-tema/sysforum-ver-tema.component';
import { AppRoutingModule } from './/app-routing.module';
import { SysforumPageNotFoundComponent } from './sysforum-page-not-found/sysforum-page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SYSFORUMTEMAComponent,
    SysforumListaTemasComponent,
    SysforumVerTemaComponent,
    SysforumPageNotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    ServicioTemaService, AngularFireDatabase, AngularFirestore
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
