import { TestBed } from '@angular/core/testing';

import { ConsumoAPIService } from './consumo-api.service';

describe('ConsumoAPIService', () => {
  let service: ConsumoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsumoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
