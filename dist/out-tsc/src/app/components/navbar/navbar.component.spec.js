import { async, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { RouterModule } from '@angular/router';
describe('NavbarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            imports: [
                FormsModule,
                RouterTestingModule,
                AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
                AngularFireDatabaseModule,
                AngularFireModule,
                RouterModule,
            ],
            providers: [AngularFirestore, AngularFireModule],
        })
            .compileComponents();
    }));
    beforeEach(function () {
    });
    it('should create', function () {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=navbar.component.spec.js.map