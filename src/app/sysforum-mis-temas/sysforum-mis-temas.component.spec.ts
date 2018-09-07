import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysforumMisTemasComponent } from './sysforum-mis-temas.component';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouterTestingModule } from '@angular/router/testing';

import {Tema} from '../sysforum-modelos/model-tema';
import {ServicioTemaService} from '../sysforum-services/servicio-tema.service';

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
  
});

describe('Listar Temas',() =>{

  //kLSIR8yuTvSR7qCcmoRy

  it('deberia retornar un array de 3 posiciones',() =>{
    let temas: Tema[];
    let usuarioActual = "kLSIR8yuTvSR7qCcmoRy";
      this.temaServicio.getTemasUsuario(usuarioActual).subscribe(temas =>{        
      this.temas = temas;
      }); 

      expect(temas.length).toEqual(3);
  });

  //0iuPkBQUSOkpgVKJaxqM

  it('deberia retornar un array Vacio',() =>{
    let temas: Tema[];
    let usuarioActual = "0iuPkBQUSOkpgVKJaxqM";
      this.temaServicio.getTemasUsuario(usuarioActual).subscribe(temas =>{        
      this.temas = temas;
      }); 

      expect(temas.length).toEqual(3);
  });

});

