import { TestBed, inject } from '@angular/core/testing';

import { ServicioTemaService } from './servicio-tema.service';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule, FirebaseApp } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import {Tema} from '../sysforum-modelos/model-tema';

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

describe('Listar Temas',() =>{
 
  //kLSIR8yuTvSR7qCcmoRy

  it('deberia retornar un array de 3 posiciones',() =>{
    let arreglo: Tema[];
    let usuarioActual = "kLSIR8yuTvSR7qCcmoRy";
    let afs : AngularFirestore;
    let temaServicio = new ServicioTemaService(afs);
      temaServicio.getTemasUsuario("kLSIR8yuTvSR7qCcmoRy").subscribe(temas =>{        
      arreglo = temas;
      }); 

      expect(arreglo.length).toEqual(3);
  });

  //0iuPkBQUSOkpgVKJaxqM

  it('deberia retornar un array Vacio',() =>{
    let arreglo: Tema[];
    let usuarioActual = "0iuPkBQUSOkpgVKJaxqM";
    var ServicioTema = require('../sysforum-services/servicio-tema.service');
    var fire : AngularFirestore;
    var temaServicio = ServicioTema.ServicioTemaService(fire);
    arreglo = temaServicio.getTemasUsuario("0iuPkBQUSOkpgVKJaxqM");

      expect(arreglo.length).toEqual(0);
  });

});

