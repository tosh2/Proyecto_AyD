import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysforumMisTemasComponent } from './sysforum-mis-temas.component';

describe('SysforumMisTemasComponent', () => {
  let component: SysforumMisTemasComponent;
  let fixture: ComponentFixture<SysforumMisTemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumMisTemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysforumMisTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
