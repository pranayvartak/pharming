import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { appleGuard } from './apple.guard';

describe('appleGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => appleGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
