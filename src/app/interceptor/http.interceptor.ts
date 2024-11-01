import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { shareReplay } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders().set('my-header', 'my-value');
  req = req.clone({
    headers
  });
  
  return next(req).pipe(
    shareReplay()
  );
};
