import { TestBed } from '@angular/core/testing';

import { AdminShellEnvService } from './admin-shell-env.service';

describe('AdminShellEnvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminShellEnvService = TestBed.get(AdminShellEnvService);
    expect(service).toBeTruthy();
  });
});
