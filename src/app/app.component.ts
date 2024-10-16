import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NewComponentComponent } from "./components/new-component/new-component.component";
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";
import { TemplateDeferrableViewsComponent } from "./components/template/template-deferrable-views/template-deferrable-views.component";
import { SignalsComponent } from "./components/signals/signals/signals.component";
import { PaiOuMaeComponent } from "./components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateDeferrableViewsComponent, SignalsComponent, PaiOuMaeComponent],
  template: `
    <router-outlet />
    <!-- <app-new-component />
    <app-template-binding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-deferrable-views /> -->
    <!-- <app-signals /> -->
     <app-pai-ou-mae />
  `,
})
export class AppComponent {}
