import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NewComponentComponent } from "@components/new-component/new-component.component";
import { TemplateBindingComponent } from '@components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "@components/template/template-variables/template-variables.component";
import { TemplateDeferrableViewsComponent } from "@components/template/template-deferrable-views/template-deferrable-views.component";
import { SignalsComponent } from "@components/signals/signals/signals.component";
import { PaiOuMaeComponent } from "@components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component";
import { AngularPipesComponent } from "@components/pipes/angular-pipes/angular-pipes.component";
import { TemplateDrivenFormsComponent } from "@components/forms/template-driven-forms/template-driven-forms.component";
import { ReactiveFormsComponent } from "@components/forms/reactive-forms/reactive-forms.component";
import { ContentComponent } from "@components/content/content.component";
import { HostElementsComponent } from "@components/host-elements/host-elements.component";
import { LifeCycleComponent } from "@components/life-cycle/life-cycle.component";
import { environment } from 'environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateDeferrableViewsComponent, SignalsComponent, PaiOuMaeComponent, AngularPipesComponent, TemplateDrivenFormsComponent, ReactiveFormsComponent, ContentComponent, HostElementsComponent, LifeCycleComponent],
  template: `
    <router-outlet />
    <!-- <app-new-component />
    <app-template-binding /> -->
    <!-- <app-template-variables /> -->
    <!-- <app-template-deferrable-views /> -->
    <!-- <app-signals /> -->
    <!-- <app-pai-ou-mae /> -->
    <!-- <app-angular-pipes /> -->
    <!-- <app-template-driven-forms /> -->
    <!-- <app-rective-forms /> -->
    <!-- <app-content>
      <p selector>
        Aqui vai o conteúdo da página
      </p>
      <p selector>
        Aqui vai o conteúdo da página
      </p>
      <p class="footer">
        Footer
      </p>
    </app-content> -->
    <!-- <app-host-elements /> -->
     @if (exibirComponente) {
       <app-life-cycle [inputMyNumber]="myNumber$()">
         <p text #text>
           Aqui vai o conteúdo da página
         </p>
       </app-life-cycle>
     }

     <button (click)="exibirComponente = !exibirComponente">Destruir componente</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public myNumber$ = signal(0);
  public exibirComponente = true;

  constructor() {
    console.log('Ambiente:', environment.env);    
  }

  ngOnInit(): void {
    setInterval(() => {
      if (this.myNumber$() === 10) {
        return;
      }

      this.myNumber$.update((oldValue) => {
        return oldValue + 1;
      });
    }, 1000);
  }
}
