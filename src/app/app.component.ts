import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from "./components/new-component/new-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent],
  template: `
    <router-outlet />
    <app-new-component />
  `,
})
export class AppComponent {}
