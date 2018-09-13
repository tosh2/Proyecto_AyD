import { TestBed, inject } from '@angular/core/testing';

import { SysforumCrearCuentaService } from './sysforum-crear-cuenta.service';

describe('SysforumCrearCuentaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SysforumCrearCuentaService]
    });
  });

  it('should be created', inject([SysforumCrearCuentaService], (service: SysforumCrearCuentaService) => {
    expect(service).toBeTruthy();
  }));
});
