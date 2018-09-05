import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarComponent } from './sidebar.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [
        FormsModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
        AngularFireDatabaseModule,
        AngularFireModule,
      ],
      providers: [  AngularFirestore, AngularFireModule],
    })
    .compileComponents();
  }));

  it('Despligue de Sidebar', () => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
  it('Verificar Variable de sesion', () => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.seteovariableid(' ')).toEqual('0');
  });
  it('Verificar Variable de sesion', () => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.seteovariablenombre(' ')).toEqual('UsuariodePrueba');
  });
});
