import { TestBed, inject } from '@angular/core/testing';

import { UsuarioService } from './usuario-service.service';

describe('UsuarioServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioService]
    });
  });

  it('should be created', inject([UsuarioService], (service: UsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
