import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysforumComentarioComponent } from './sysforum-comentario.component';

describe('SysforumComentarioComponent', () => {
  let component: SysforumComentarioComponent;
  let fixture: ComponentFixture<SysforumComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumComentarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysforumComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
