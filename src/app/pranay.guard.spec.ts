import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { pranayGuard } from './pranay.guard';

describe('pranayGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => pranayGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
