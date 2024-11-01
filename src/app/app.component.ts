import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <router-outlet />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  constructor() {
    console.log('Ambiente:', environment.env); 
  }
}
