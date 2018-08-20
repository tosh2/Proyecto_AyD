import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { AppComponent } from './app.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { SYSFORUMTEMAComponent } from './sysforum-tema/sysforum-tema.component';
>>>>>>> 44dcd97a7b33f8832f4df44414a970d0dd15f755
import {environment} from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore} from 'angularfire2/firestore';
<<<<<<< HEAD
=======
import {ServicioTemaService} from './sysforum-services/servicio-tema.service';
>>>>>>> 44dcd97a7b33f8832f4df44414a970d0dd15f755
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { SYSFORUMTEMAComponent } from './sysforum-tema/sysforum-tema.component';
import {ServicioTemaService} from './sysforum-services/servicio-tema.service';
import { SysforumListaTemasComponent } from './sysforum-lista-temas/sysforum-lista-temas.component';
import { SysforumVerTemaComponent } from './sysforum-ver-tema/sysforum-ver-tema.component';
import { SysforumPageNotFoundComponent } from './sysforum-page-not-found/sysforum-page-not-found.component';
import {SysforumListarComentariosService} from './sysforum-services/sysforum-listar-comentarios.service';


import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SYSFORUMTEMAComponent,
    SysforumListaTemasComponent,
    SysforumVerTemaComponent,
    SysforumPageNotFoundComponent,
    AdminLayoutComponent

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    ServicioTemaService, AngularFireDatabase, AngularFirestore,SysforumListarComentariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
