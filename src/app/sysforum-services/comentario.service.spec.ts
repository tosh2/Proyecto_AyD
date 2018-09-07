import { TestBed, inject } from '@angular/core/testing';

import { ComentarioService } from './comentario.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { ServicioTemaService } from './servicio-tema.service';
import { AngularFirestore } from 'angularfire2/firestore';

describe('ComentarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserModule,
        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
        AngularFireDatabaseModule,
    ],
      providers: [ComentarioService, AngularFireDatabase, AngularFirestore
       ],
    });
  });

  it('should be created', inject([ComentarioService], (service: ComentarioService) => {
    expect(service).toBeTruthy();
  }));
});
