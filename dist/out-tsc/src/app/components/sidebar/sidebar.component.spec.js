import { async, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
describe('SidebarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SidebarComponent],
            imports: [
                FormsModule,
                RouterTestingModule,
                AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
                AngularFireDatabaseModule,
                AngularFireModule,
            ],
            providers: [AngularFirestore, AngularFireModule],
        })
            .compileComponents();
    }));
    it('Despligue de Sidebar', function () {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
    it('Verificar Variable de sesion id', function () {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.seteovariableid(' ')).toEqual('0');
    });
    it('Verificar Variable de sesion name', function () {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.seteovariablenombre(' ')).toEqual('UsuariodePrueba');
    });
    it('Verificar Variable de sesion id', function () {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.seteovariableid('1')).toEqual('1');
    });
    it('Verificar Variable de sesion name', function () {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.seteovariableid('usuario1')).toEqual('usuario1');
    });
    it('Verificar cantidad menus colocados en dashboard', function () {
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component.menuItems.length).toEqual(4);
    });
});
//# sourceMappingURL=sidebar.component.spec.js.map