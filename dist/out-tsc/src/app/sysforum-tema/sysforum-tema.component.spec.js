import { async, TestBed, inject } from '@angular/core/testing';
import { SYSFORUMTEMAComponent } from './sysforum-tema.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { ServicioTemaService } from '../sysforum-services/servicio-tema.service';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from '../app.component';
import { SysforumListaTemasComponent } from '../sysforum-lista-temas/sysforum-lista-temas.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { By } from '@angular/platform-browser';
describe('Componente Tema', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SYSFORUMTEMAComponent, AppComponent, SysforumListaTemasComponent,
                NavbarComponent, SidebarComponent, FooterComponent],
            imports: [FormsModule,
                RouterTestingModule,
                AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
                AngularFireDatabaseModule,
                AngularFireModule,
            ],
            providers: [ServicioTemaService, AngularFirestore, AngularFireModule, {
                    provide: APP_BASE_HREF, USE_VALUE: '/'
                }
            ]
        })
            .compileComponents();
    }));
    it('Componente creado', function () {
        var fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
        fixture.detectChanges();
        var component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });
    it('Creacion de Modelo Tema', function () {
        var fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
        fixture.detectChanges();
        var component = fixture.componentInstance;
        expect(component.tema).toBeTruthy();
    });
    it('Verificacion de variables de modelo', function () {
        var fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
        fixture.detectChanges();
        var component = fixture.componentInstance;
        expect(component.tema.title).toBe('');
        expect(component.tema.description).toBe('');
    });
    it('Verificacion de Servicio Tema en Componente', function () {
        var fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
        fixture.detectChanges();
        var component = fixture.componentInstance;
        expect(component.serviciotema).toBeTruthy();
    });
    it('Verificacion de Formulario Html', function () {
        var fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
        fixture.detectChanges();
        var component = fixture.debugElement.nativeElement;
        expect(component.querySelector('form')).toBeTruthy();
    });
    it('Validar variables de sesion ID por defecto', function () {
        var fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
        var component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.setId('')).toEqual('0');
    });
    it('Validar variables de sesion Nombre por defecto', function () {
        var fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
        var component = fixture.componentInstance;
        fixture.detectChanges();
        //const component = fixture.debugElement.nativeElement;
        expect(component.setNombre('')).toEqual('UsuarioPrueba');
    });
    it('Debe de mostra el nombre de usuario en tag h6', async(function () {
        var fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
        var component = fixture.componentInstance;
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h6').textContent).toContain(component.userName);
    }));
    it('Metodo addTema y su servicio sean llamados', inject([ServicioTemaService], function (service) {
        inject([SYSFORUMTEMAComponent], function (VerTema) {
            var ser = fixture.debugElement.injector.get(SYSFORUMTEMAComponent);
            var t = component.onSubmit();
            var onClikDarLike = spyOn(ser, 'onSubmit');
            fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
            expect(onClikDarLike.apply).toHaveBeenCalled();
            expect(t).toHaveBeenCalled();
            expect(t).toContain(service.addTema);
            expect(service.addTema).toBeTruthy.arguments(Array, 'prueba', 'prueba', 'tag', '0', 'userPrueba');
        });
    }));
});
//# sourceMappingURL=sysforum-tema.component.spec.js.map