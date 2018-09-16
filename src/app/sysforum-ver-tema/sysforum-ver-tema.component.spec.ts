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
import {SysforumTemaFavoritoService} from '../sysforum-services/sysforum-tema-favorito.service';

import {DebugElement} from "@angular/core";
import { expressionType } from '@angular/compiler/src/output/output_ast';
describe('SysforumVerTemaComponent', () => {

  let component: SysforumVerTemaComponent;
  let fixture: ComponentFixture<SysforumVerTemaComponent>;
  let comen: DebugElement;
  let fav : DebugElement;
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

  it('Validar variables de sesion ID por defecto', () => { 
    const fixture = TestBed.createComponent(SysforumVerTemaComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.setId('')).toEqual('0');
  });
  it('Validar variables de sesion Nombre por defecto', () => { 
    const fixture = TestBed.createComponent(SysforumVerTemaComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    //const component = fixture.debugElement.nativeElement;
    expect(component.setName('')).toEqual('UsuarioPrueba');
  });
  
  it('Debe de mostra el nombre de usuario en tag b', async(() => {
    const fixture = TestBed.createComponent(SysforumVerTemaComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('b').textContent).toContain(component.userName);
  })); 

  it('Variable de sesion debe estar vacio al iniciar', function(){
    expect(component.Vsesion).toBeNull();
    expect(component.bandera).toBeFalsy();
  })

  describe('Validar que comentario tenga seteado el nombre y id de usuario', function(){
  
    it('Revisar que comentario tenga seteado id de usuario', function(){
      expect(component.coment.id_usuario).not.toEqual('');
    });

    it('Revisar que comentario tenga seteado nombre de usuario', function(){
      expect(component.coment.nombre_usuario).not.toEqual('');
    })


  });
  it('Debe de mostra el nombre del autor del comentario', async(() => {
    const fixture = TestBed.createComponent(SysforumVerTemaComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('b').textContent).toContain(component.userName);
  }));

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

    it('Metodo darLike y su servicio sean llamados',
      inject([SysforumLikeService], (service: SysforumLikeService) => {

        inject ([SysforumVerTemaComponent], (VerTema: SysforumVerTemaComponent) =>{
          const ser = fixture.debugElement.injector.get(SysforumVerTemaComponent);
          const t =component.darLike(Event,comen);
          const onClikDarLike = spyOn(ser, 'darLike');

          fixture.debugElement.query(By.css('button')).triggerEventHandler('click',null);
          
          expect(onClikDarLike.apply).toHaveBeenCalled();

          expect(t).toHaveBeenCalled();
          expect(t).toContain(service.InsertarRegistroLike);
          
          expect(service.InsertarRegistroLike).arguments(Array,'coment#23','3');
        })
      })
    );
    
  });

  describe('test para boton de tema favorito', function(){
    it('Revisar que el componente del boton para favorito exista Html', () => {
      const fixture = TestBed.createComponent(SysforumVerTemaComponent);
      fixture.detectChanges();
      const Favorito = fixture.nativeElement.querySelector('#button2');
      expect(Favorito.id).toEqual("button2");
    });
    it('Revisar que la variable de sesion no sea nula', function(){
      expect(component.Vsesion).not.toEqual('0');
    });

    it('Revisar bandera de favorito', function(){
      expect(component.banderafav).toBeFalsy();
    });
    it('Metodo de marcarFavorito y su servicio esten definidos', 
    inject([SysforumTemaFavoritoService], (service: SysforumTemaFavoritoService) => {
      expect(service).toBeTruthy();
      expect(service.InsertarRegistroFavorito).toBeDefined();
      inject ([SysforumVerTemaComponent], (VerTema: SysforumVerTemaComponent) =>{
        expect(VerTema.darFavorito(Event,VerTema.temFav)).toBeDefined();
        expect(VerTema.banderafav).toBeTruthy();
        })
      })
    );
    it('Metodo darFavorito y su servicio sean llamados',
      inject([SysforumTemaFavoritoService], (service: SysforumTemaFavoritoService) => {

        inject ([SysforumVerTemaComponent], (VerTema: SysforumVerTemaComponent) =>{
          const ser = fixture.debugElement.injector.get(SysforumVerTemaComponent);
          const t =component.darFavorito(Event,fav);
          const onClikDarLike = spyOn(ser, 'darFavorito');

          fixture.debugElement.query(By.css('button')).triggerEventHandler('click',null);
          
          expect(onClikDarLike.apply).toHaveBeenCalled();

          expect(t).toHaveBeenCalled();
          expect(t).toContain(service.InsertarRegistroFavorito);
          
          expect(service.InsertarRegistroFavorito).arguments(Array,'tema1#23','3',true);
        })
      })
    );
  });
  
});
