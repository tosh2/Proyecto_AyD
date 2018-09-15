import { TestBed, inject } from '@angular/core/testing';
import { SysforumLikeService } from './sysforum-like.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
describe('SysforumLikeService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            imports: [
                FormsModule,
                BrowserModule,
                AngularFireModule,
                AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
                AngularFireDatabaseModule,
            ],
            providers: [SysforumLikeService, AngularFireDatabase, AngularFirestore
            ],
        });
    });
    it('should be created', inject([SysforumLikeService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=sysforum-like.service.spec.js.map