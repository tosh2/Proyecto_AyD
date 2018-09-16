import { TestBed, inject } from '@angular/core/testing';
import { SysforumCrearCuentaService } from './sysforum-crear-cuenta.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';
describe('SysforumCrearCuentaService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                BrowserModule,
                AngularFireModule,
                AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
                AngularFireDatabaseModule,
            ],
            providers: [SysforumCrearCuentaService, AngularFireDatabase, AngularFirestore
            ],
        });
    });
    it('should be created', inject([SysforumCrearCuentaService], function (service) {
        expect(service).toBeTruthy();
    }));
    it('Deberia comprobar metodo getExists', inject([SysforumCrearCuentaService], function (service) {
        expect(service.getExists);
    }));
    it('Deberia comprobar metodo crearUsuario', inject([SysforumCrearCuentaService], function (service) {
        expect(service.crearUsuario);
    }));
});
//# sourceMappingURL=sysforum-crear-cuenta.service.spec.js.map