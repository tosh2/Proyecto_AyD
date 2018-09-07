import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysforumComentarioComponent } from './sysforum-comentario.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

describe('SysforumComentarioComponent', () => {
  let component: SysforumComentarioComponent;
  let fixture: ComponentFixture<SysforumComentarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumComentarioComponent ],
      imports: [FormsModule,
        RouterTestingModule,
        AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'),
        AngularFireDatabaseModule,
        AngularFireModule,
      ],
      providers: [AngularFirestore, AngularFireModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysforumComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Componente de comentario creado', () => {
    expect(component).toBeTruthy();
  });
});
