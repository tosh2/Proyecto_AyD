
import { async, TestBed, ComponentFixture, inject } from '@angular/core/testing';

import { SysforumCrearCuentaComponent } from './sysforum-crear-cuenta.component';
import { SystemJsNgModuleLoaderConfig } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { SysforumCrearCuentaService } from '../sysforum-services/sysforum-crear-cuenta.service';
import { APP_BASE_HREF } from '@angular/common';
import { USE_VALUE } from '@angular/core/src/di/injector';
import { AppComponent } from '../app.component';
import { SysforumListaTemasComponent } from '../sysforum-lista-temas/sysforum-lista-temas.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { By } from '@angular/platform-browser';

describe('SysforumCrearCuentaComponent', () => {
  let component: SysforumCrearCuentaComponent;
  let fixture: ComponentFixture<SysforumCrearCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumCrearCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumCrearCuentaComponent, AppComponent, 
      NavbarComponent, SidebarComponent, FooterComponent ],
      imports: [FormsModule,
        RouterTestingModule,
      AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
      AngularFireDatabaseModule,
      AngularFireModule,
    ],
      providers: [SysforumCrearCuentaService, AngularFirestore, AngularFireModule, {
        provide:  APP_BASE_HREF, USE_VALUE: '/'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysforumCrearCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deberia crear.', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia crear modelo Usuario.', () =>  {
    expect(component.usuario).toBeTruthy();
  });

  it('Deberia verificar los atributos de el modelo.', () =>  {
    expect(component.usuario.id).toBe('');
    expect(component.usuario.nombre).toBe('');
    expect(component.usuario.usuario).toBe('');
    expect(component.usuario.clave).toBe('');
  });
  
  it('Deberia verificar servicio de crear para crear usuario.', () =>  {
    expect(component.SysforumCrearCuentaService).toBeTruthy();
  });

  it('Verificacion de Formulario Html', () =>  {
    const htmlcomponent = fixture.debugElement.nativeElement;
    expect(htmlcomponent.querySelector('form')).toBeTruthy();
  });

  it('Metodo addTema y su servicio sean llamados',
    inject([SysforumCrearCuentaService], (service: SysforumCrearCuentaService) => {
      inject ([SysforumCrearCuentaComponent], (VerTema: SysforumCrearCuentaComponent) =>{
        const ser = fixture.debugElement.injector.get(SysforumCrearCuentaComponent);
        const t = component.onSubmit();
        const onClikCrear = spyOn(ser, 'onSubmit');

        fixture.debugElement.query(By.css('button')).triggerEventHandler('click',null);
        
        expect(onClikCrear.apply).toHaveBeenCalled();

        expect(t).toHaveBeenCalled();
        expect(t).toContain(service.crearUsuario);
        
        expect(service.crearUsuario).toBeTruthy.arguments(Array,'nombreUsuario','nombre','contrasena');
        
      })
    })
  );

});

// nuevo commit, espero este si hahah