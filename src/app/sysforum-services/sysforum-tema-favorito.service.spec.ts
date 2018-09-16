import { TestBed, inject } from '@angular/core/testing';

import { SysforumTemaFavoritoService } from './sysforum-tema-favorito.service';

import { SysforumListarComentariosService } from './sysforum-listar-comentarios.service';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';

describe('SysforumTemaFavoritoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserModule,
        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
        AngularFireDatabaseModule,
    ],
      providers: [SysforumTemaFavoritoService, AngularFireDatabase, AngularFirestore
      ],
    });
  });

  it('should be created', inject([SysforumTemaFavoritoService], (service: SysforumTemaFavoritoService) => {
    expect(service).toBeTruthy();
  }));
});
