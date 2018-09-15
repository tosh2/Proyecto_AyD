import { TestBed, inject } from '@angular/core/testing';
import { SysforumListarComentariosService } from './sysforum-listar-comentarios.service';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
describe('SysforumListarComentariosService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                BrowserModule,
                AngularFireModule,
                AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
                AngularFireDatabaseModule,
            ],
            providers: [SysforumListarComentariosService, AngularFireDatabase, AngularFirestore]
        });
    });
    it('Creacion de Servicio Firebase Comentario', inject([SysforumListarComentariosService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=sysforum-listar-comentarios.service.spec.js.map