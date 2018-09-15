import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Despligue de login', () => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('Verificacion de Formulario Html', () =>  {
    const htmlcomponent = fixture.debugElement.nativeElement;
    expect(htmlcomponent.querySelector('form')).toBeTruthy();
  });
  it('Verificacion  inputs Html', () =>  {
    const htmlcomponent = fixture.debugElement.nativeElement;
    expect(htmlcomponent.querySelector('input')).toBeTruthy();
  });
  it('Verificacion  boton Html', () =>  {
    const htmlcomponent = fixture.debugElement.nativeElement;
    expect(htmlcomponent.querySelector('button')).toBeTruthy();
  });
});
