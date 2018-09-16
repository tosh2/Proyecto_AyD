import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { SYSFORUMTEMAComponent } from '../sysforum-tema/sysforum-tema.component';
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
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { Component } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';
import { By } from '@angular/platform-browser';

import {AuthenticationService} from '../sysforum-services/authentication.service'
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, SYSFORUMTEMAComponent, AppComponent, SysforumListaTemasComponent,
        NavbarComponent, SidebarComponent, FooterComponent ],
        imports: [FormsModule,
          RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
        AngularFireDatabaseModule,
        AngularFireModule,BrowserModule ],
     
        providers: [ServicioTemaService, AngularFirestore, AngularFireModule, {
        provide:  APP_BASE_HREF, USE_VALUE: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', async() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it('Despligue de login', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('Verificacion de Formulario Html', () =>  {
    const htmlcomponent = fixture.debugElement.nativeElement;
    expect(htmlcomponent.querySelector('form')).toBeTruthy();
  });
  it('Verificacion  inputs Html', () =>  {
    const htmlcomponent = fixture.debugElement.nativeElement;
    expect(htmlcomponent.querySelector('input')).toBeTruthy();
  });
  it('Verificacion  boton Html', () =>  {
    const htmlcomponent = fixture.debugElement.nativeElement;
    expect(htmlcomponent.querySelector('button')).toBeTruthy();
  });

  it('Deberia crear modelo Usuario.', () =>  {
    expect(component.user).toBeTruthy();
  });

  it('Deberia verificar los atributos de el modelo.', () =>  {
    expect(component.user.nombre).toBe('');
    expect(component.user.usuario).toBe('');
    expect(component.user.clave).toBe('');
  });

  it('Metodo login y su servicio sean llamados',
  inject([AuthenticationService], (service: AuthenticationService) => {
    inject ([LoginComponent], (VerTema: LoginComponent) =>{
      const ser = fixture.debugElement.injector.get(LoginComponent);
      const t = component.onSubmit();
      const onClikCrear = spyOn(ser, 'onSubmit');

      fixture.debugElement.query(By.css('button')).triggerEventHandler('click',null);
      
      expect(onClikCrear.apply).toHaveBeenCalled();

      expect(t).toHaveBeenCalled();
      expect(t).toContain(service.login);
      
      expect(service.login).toBeTruthy.arguments(Array,'omar95','123456');
      
    })
  })
);

});
