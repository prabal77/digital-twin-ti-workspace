import { TestBed } from '@angular/core/testing';

import { DigitalTwinDataService } from './digital-twin-data.service';

describe('DigitalTwinDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigitalTwinDataService = TestBed.get(DigitalTwinDataService);
    expect(service).toBeTruthy();
  });
});
