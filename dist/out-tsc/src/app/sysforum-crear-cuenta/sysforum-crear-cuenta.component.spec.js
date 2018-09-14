import { async, TestBed, inject } from '@angular/core/testing';
import { SysforumCrearCuentaComponent } from './sysforum-crear-cuenta.component';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { SysforumCrearCuentaService } from '../sysforum-services/sysforum-crear-cuenta.service';
import { APP_BASE_HREF } from '@angular/common';
import { AppComponent } from '../app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { By } from '@angular/platform-browser';
describe('SysforumCrearCuentaComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SysforumCrearCuentaComponent, AppComponent,
                NavbarComponent, SidebarComponent, FooterComponent],
            imports: [FormsModule,
                RouterTestingModule,
                AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
                AngularFireDatabaseModule,
                AngularFireModule,
            ],
            providers: [SysforumCrearCuentaService, AngularFirestore, AngularFireModule, {
                    provide: APP_BASE_HREF, USE_VALUE: '/'
                }
            ]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SysforumCrearCuentaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('Deberia crear.', function () {
        expect(component).toBeTruthy();
    });
    it('Deberia crear modelo Usuario.', function () {
        expect(component.usuario).toBeTruthy();
    });
    it('Deberia verificar los atributos de el modelo.', function () {
        expect(component.usuario.nombre).toBe('');
        expect(component.usuario.usuario).toBe('');
        expect(component.usuario.clave).toBe('');
    });
    it('Deberia verificar servicio de crear para crear usuario.', function () {
        expect(component.servicioCrearCuenta).toBeTruthy();
    });
    it('Verificacion de Formulario Html', function () {
        var htmlcomponent = fixture.debugElement.nativeElement;
        expect(htmlcomponent.querySelector('form')).toBeTruthy();
    });
    it('Metodo addTema y su servicio sean llamados', inject([SysforumCrearCuentaService], function (service) {
        inject([SysforumCrearCuentaComponent], function (VerTema) {
            var ser = fixture.debugElement.injector.get(SysforumCrearCuentaComponent);
            var t = component.onSubmit();
            var onClikCrear = spyOn(ser, 'onSubmit');
            fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
            expect(onClikCrear.apply).toHaveBeenCalled();
            expect(t).toHaveBeenCalled();
            expect(t).toContain(service.crearUsuario);
            expect(service.crearUsuario).toBeTruthy.arguments(Array, 'nombreUsuario', 'nombre', 'contrasena');
        });
    }));
});
//# sourceMappingURL=sysforum-crear-cuenta.component.spec.js.map