import { CanActivateFn } from '@angular/router';

export const pranayGuard: CanActivateFn = (route, state) => {
  return true;
};

