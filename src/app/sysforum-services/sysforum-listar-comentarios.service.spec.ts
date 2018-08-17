import { TestBed, inject } from '@angular/core/testing';

import { SysforumListarComentariosService } from './sysforum-listar-comentarios.service';

describe('SysforumListarComentariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SysforumListarComentariosService]
    });
  });

  it('should be created', inject([SysforumListarComentariosService], (service: SysforumListarComentariosService) => {
    expect(service).toBeTruthy();
  }));
});
