import { TestBed, inject } from '@angular/core/testing';

import { SysforumCrearCuentaService } from './sysforum-crear-cuenta.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { SysforumLikeService } from './sysforum-like.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';

describe('SysforumCrearCuentaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        BrowserModule,
        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
        AngularFireDatabaseModule,
    ],
      providers: [SysforumCrearCuentaService, AngularFireDatabase, AngularFirestore
      ],
    });
  });
  
  it('should be created', inject([SysforumCrearCuentaService], (service: SysforumCrearCuentaService) => {
    expect(service).toBeTruthy();
  }));


  it('Deberia comprobar metodo getExists',
    inject([SysforumCrearCuentaService], (service: SysforumCrearCuentaService) => {
        expect(service.getExists);
    })
  );

  it('Deberia comprobar metodo crearUsuario',
    inject([SysforumCrearCuentaService], (service: SysforumCrearCuentaService) => {
        expect(service.crearUsuario);
    })
  );
    
});
