import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysforumVerTemaComponent } from './sysforum-ver-tema.component';

describe('SysforumVerTemaComponent', () => {
  let component: SysforumVerTemaComponent;
  let fixture: ComponentFixture<SysforumVerTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumVerTemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysforumVerTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
