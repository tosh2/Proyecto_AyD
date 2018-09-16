import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { SysforumListarFavoritosComponent } from './sysforum-listar-favoritos.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouterTestingModule } from '@angular/router/testing';
import { SysforumTemaFavoritoService } from '../sysforum-services/sysforum-tema-favorito.service';
import { SysforumVerTemaComponent } from '../sysforum-ver-tema/sysforum-ver-tema.component';
import { ServicioTemaService } from '../sysforum-services/servicio-tema.service';

describe('SysforumListarFavoritosComponent', () => {
  let component: SysforumListarFavoritosComponent;
  let fixture: ComponentFixture<SysforumListarFavoritosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumListarFavoritosComponent ],
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

  beforeEach(() => {
    fixture = TestBed.createComponent(SysforumListarFavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Listado de Temas Favoritos generado con exito', () => {
    expect(component).toBeTruthy();
  });

  describe('test para listar temas favoritos', function(){
    it('Servicio getFavorito y getTemas esten definidos', 
    inject([SysforumTemaFavoritoService], (service: SysforumTemaFavoritoService) => {
      expect(service.getFavoritosID('prueba')).toBeDefined();
      inject ([ServicioTemaService], (VerTema: ServicioTemaService) =>{
        expect(VerTema.getTemas).toBeDefined();
        })
      })
    );
  });
});
