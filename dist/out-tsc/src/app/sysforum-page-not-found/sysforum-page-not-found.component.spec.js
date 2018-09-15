import { async, TestBed } from '@angular/core/testing';
import { SysforumPageNotFoundComponent } from './sysforum-page-not-found.component';
describe('SysforumPageNotFoundComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SysforumPageNotFoundComponent]
        })
            .compileComponents();
    }));
    it('Error de Pagina No encontrada', function () {
        fixture = TestBed.createComponent(SysforumPageNotFoundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=sysforum-page-not-found.component.spec.js.map