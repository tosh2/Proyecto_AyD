import { TestBed, inject } from '@angular/core/testing';

import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
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
