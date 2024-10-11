import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NewComponentComponent } from "./components/new-component/new-component.component";
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, TemplateBindingComponent, TemplateVariablesComponent],
  template: `
    <router-outlet />
    <!-- <app-new-component />
    <app-template-binding /> -->
    <app-template-variables />
  `,
})
export class AppComponent {}
