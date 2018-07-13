import { TestBed, inject } from '@angular/core/testing';

import { CarrosService } from './carros.service';

describe('CarrosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarrosService]
    });
  });

  it('should be created', inject([CarrosService], (service: CarrosService) => {
    expect(service).toBeTruthy();
  }));
});
