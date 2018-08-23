import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysforumPageNotFoundComponent } from './sysforum-page-not-found.component';

describe('SysforumPageNotFoundComponent', () => {
  let component: SysforumPageNotFoundComponent;
  let fixture: ComponentFixture<SysforumPageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumPageNotFoundComponent ]
    })
    .compileComponents();
  }));
  it('Error de Pagina No encontrada', () => {
    fixture = TestBed.createComponent(SysforumPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
