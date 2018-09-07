import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysforumMisTemasComponent } from './sysforum-mis-temas.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from '../../environments/environment';

describe('SysforumMisTemasComponent', () => {
  let component: SysforumMisTemasComponent;
  let fixture: ComponentFixture<SysforumMisTemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysforumMisTemasComponent ],
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

  it('should create', () => {
    fixture = TestBed.createComponent(SysforumMisTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
