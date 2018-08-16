import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { SYSFORUMTEMAComponent } from './sysforum-tema.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { ServicioTemaService } from '../sysforum-services/servicio-tema.service';
import { APP_BASE_HREF } from '@angular/common';
import { USE_VALUE } from '@angular/core/src/di/injector';
import { AppComponent } from '../app.component';
import { SysforumListaTemasComponent } from '../sysforum-lista-temas/sysforum-lista-temas.component';

describe('Componente Tema', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SYSFORUMTEMAComponent, AppComponent, SysforumListaTemasComponent ],
      imports: [FormsModule,
      AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
      AngularFireDatabaseModule,
      AngularFireModule,
    ],
      providers: [ServicioTemaService, AngularFirestore, AngularFireModule, {
        provide:  APP_BASE_HREF, USE_VALUE: '/'}
      ]
    })
    .compileComponents();
  }));
  it('Componente creado', () =>  {
    const fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
  it('Creacion de Modelo Tema', () =>  {
    const fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    expect(component.tema).toBeTruthy();
  });
  it('Verificacion de variables de modelo', () =>  {
    const fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    expect(component.tema.title).toBe('');
    expect(component.tema.description).toBe('');
  });
  it('Verificacion de Servicio Tema en Componente', () =>  {
    const fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
    fixture.detectChanges();
    const component = fixture.componentInstance;
    expect(component.serviciotema).toBeTruthy();
  });
  it('Verificacion de Formulario Html', () =>  {
    const fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
    fixture.detectChanges();
    const component = fixture.debugElement.nativeElement;
    expect(component.querySelector('form')).toBeTruthy();
  });
});
