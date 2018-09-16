import { TestBed, inject } from '@angular/core/testing';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AuthenticationService } from './authentication.service';
import { AngularFirestore, 
       
       } from 'angularfire2/firestore';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[AngularFireDatabaseModule,
        AngularFireModule,
        AngularFireModule.initializeApp(environment.firebase, 'proyecto-ayd1'), 
              
            ],
      providers: [AuthenticationService, AngularFireDatabase, AngularFirestore,
         ]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('Validar que exista metodo login',
    inject([AuthenticationService], (service: AuthenticationService) => {
        expect(service.login).toBeTruthy;
    })
  );
  it('Validar que exista metodo logout',
    inject([AuthenticationService], (service: AuthenticationService) => {
        expect(service.logout).toBeTruthy;
    })
  );
  it('Validar que exista metodo getSesion',
    inject([AuthenticationService], (service: AuthenticationService) => {
        expect(service.getSesion).toBeTruthy;
    })
  );
});
