import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SysforumVerTemaComponent } from './sysforum-ver-tema.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { SysforumListarComentariosService} from '../sysforum-services/sysforum-listar-comentarios.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { SysforumLikeService } from '../sysforum-services/sysforum-like.service';
import { By } from '@angular/platform-browser';

import {DebugElement} from "@angular/core";
import { expressionType } from '@angular/compiler/src/output/output_ast';
describe('SysforumVerTemaComponent', () => {

  let component: SysforumVerTemaComponent;
  let fixture: ComponentFixture<SysforumVerTemaComponent>;
  let comen: DebugElement;
  let user: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        SysforumVerTemaComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent,
        NgbAlert
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
        AngularFireDatabaseModule,
        AngularFireModule,
      ],
      providers: [ SysforumListarComentariosService, AngularFirestore, AngularFireModule, SysforumLikeService],
    })
    .compileComponents();
  }));

  it('Verificacion de Variables', () => {
    fixture = TestBed.createComponent(SysforumVerTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.Titulo).toBeTruthy();
  });
  
  it('Crear Ver tema en otra pagina aparte', () => {
    fixture = TestBed.createComponent(SysforumVerTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Variable de sesion debe estar vacio al iniciar', function(){
    expect(component.Vsesion).toBeNull();
    expect(component.bandera).toBeFalsy();
  })

  describe('test para un link por persona', function(){

    it('Revisar que la variable de sesion no sea nula', function(){
      expect(component.Vsesion).not.toEqual('0');
    });

    it('Revisar bandera de variable de sesion', function(){
      expect(component.bandera).toBeFalsy();
    });

    it('Metodo de darLike y su servicio esten definidos', 
    inject([SysforumLikeService], (service: SysforumLikeService) => {
      expect(service).toBeTruthy();
      expect(service.InsertarRegistroLike).toBeDefined();
      inject ([SysforumVerTemaComponent], (VerTema: SysforumVerTemaComponent) =>{
        expect(VerTema.darLike(Event,VerTema.coment)).toBeDefined();
        expect(VerTema.bandera).toBeTruthy();
        })
      })
    );

  });
});
