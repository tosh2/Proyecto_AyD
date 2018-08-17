import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysforumVerTemaComponent } from './sysforum-ver-tema.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import {SysforumListarComentariosService} from '../sysforum-services/sysforum-listar-comentarios.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouterTestingModule } from '@angular/router/testing';

describe('SysforumVerTemaComponent', () => {
  let component: SysforumVerTemaComponent;
  let fixture: ComponentFixture<SysforumVerTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumVerTemaComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
        AngularFireDatabaseModule,
        AngularFireModule,
      ],
      providers: [ SysforumListarComentariosService, AngularFirestore, AngularFireModule],
    })
    .compileComponents();
  }));

  it('Verificacion de Variables', () => {
    fixture = TestBed.createComponent(SysforumVerTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.Titulo).toBeTruthy();
    expect(component.Nombre).toBeTruthy();
    expect(component.Identi).toBeTruthy();
    expect(component.Descri).toBeTruthy();
    expect(component.comentario).toBeTruthy();
  });
  it('Crear Ver tema en otra pagina aparte', () => {
    fixture = TestBed.createComponent(SysforumVerTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
