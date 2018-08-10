import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SYSFORUMTEMAComponent } from './sysforum-tema.component';

describe('SYSFORUMTEMAComponent', () => {
  let component: SYSFORUMTEMAComponent;
  let fixture: ComponentFixture<SYSFORUMTEMAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SYSFORUMTEMAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SYSFORUMTEMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
