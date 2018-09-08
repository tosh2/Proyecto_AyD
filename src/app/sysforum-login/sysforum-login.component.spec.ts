import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysforumLoginComponent } from './sysforum-login.component';

describe('SysforumLoginComponent', () => {
  let component: SysforumLoginComponent;
  let fixture: ComponentFixture<SysforumLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysforumLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
