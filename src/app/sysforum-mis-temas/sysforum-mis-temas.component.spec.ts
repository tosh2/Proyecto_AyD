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
  
});



