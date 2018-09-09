import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysforumMisTemasComponent } from './sysforum-mis-temas.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouterTestingModule } from '@angular/router/testing';


import {ServicioTemaService} from '../sysforum-services/servicio-tema.service';

import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from 'angularfire2/firestore';

import {Tema} from '../sysforum-modelos/model-tema';
//import {ServicioTemaService} from '../sysforum-services/servicio-tema.service';
import { SysforumLoginComponent } from '../sysforum-login/sysforum-login.component';

describe('SysforumMisTemasComponent', () => {
  let component: SysforumMisTemasComponent;
  let fixture: ComponentFixture<SysforumMisTemasComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumMisTemasComponent ],
      imports: [FormsModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
        AngularFireDatabaseModule,
        AngularFireModule,
      ],
      providers: [AngularFirestore, AngularFireModule,
      ]
    })
    .compileComponents();
  }));


  it('Listado de Temas generado con exito', () => {
    fixture = TestBed.createComponent(SysforumMisTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Verificar Variable de sesion Usuario', () => {
    fixture = TestBed.createComponent(SysforumMisTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.usuario(' ')).toEqual('0');
  });
  
/*
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
  */
});



