import { async, TestBed } from '@angular/core/testing';
import { SysforumListaTemasComponent } from './sysforum-lista-temas.component';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouterTestingModule } from '@angular/router/testing';
describe('SysforumListaTemasComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SysforumListaTemasComponent],
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
    it('Listado de Temas generado con exito', function () {
        fixture = TestBed.createComponent(SysforumListaTemasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sysforum-lista-temas.component.spec.js.map