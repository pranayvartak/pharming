import { CanActivateFn } from '@angular/router';

export const appleGuard: CanActivateFn = (route, state) => {
  return true;
};
