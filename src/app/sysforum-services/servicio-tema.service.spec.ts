import { TestBed, inject } from '@angular/core/testing';

import { ServicioTemaService } from './servicio-tema.service';

describe('ServicioTemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioTemaService]
    });
  });

  it('should be created', inject([ServicioTemaService], (service: ServicioTemaService) => {
    expect(service).toBeTruthy();
  }));
});
