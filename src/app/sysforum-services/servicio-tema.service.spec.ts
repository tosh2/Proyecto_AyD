import { TestBed, inject } from '@angular/core/testing';

import { ServicioTemaService } from './servicio-tema.service';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../environments/environment';
describe('ServicioTemaService', () => {

    beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [
        FormsModule,
        BrowserModule,
        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
        AngularFireDatabaseModule,
    ],
      providers: [ServicioTemaService, AngularFireDatabase, AngularFirestore
       ],
    });
  });

  it('Creacion de Servicio Firebase de tema ', inject([ServicioTemaService], (service: ServicioTemaService) => {
    expect(service).toBeTruthy();
  }));
});
