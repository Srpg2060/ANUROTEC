/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioLibroService } from './servicioLibro.service';

describe('Service: ServicioLibro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioLibroService]
    });
  });

  it('should ...', inject([ServicioLibroService], (service: ServicioLibroService) => {
    expect(service).toBeTruthy();
  }));
});
