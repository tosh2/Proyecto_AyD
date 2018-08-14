import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysforumListaTemasComponent } from './sysforum-lista-temas.component';

describe('SysforumListaTemasComponent', () => {
  let component: SysforumListaTemasComponent;
  let fixture: ComponentFixture<SysforumListaTemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumListaTemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysforumListaTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
