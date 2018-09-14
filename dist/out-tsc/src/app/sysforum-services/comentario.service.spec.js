import { TestBed, inject } from '@angular/core/testing';
import { ComentarioService } from './comentario.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
describe('ComentarioService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                BrowserModule,
                AngularFireModule,
                AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
                AngularFireDatabaseModule,
            ],
            providers: [ComentarioService, AngularFireDatabase, AngularFirestore
            ],
        });
    });
    it('should be created', inject([ComentarioService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=comentario.service.spec.js.map