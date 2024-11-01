import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  pages = signal([
    {
      name: "App new component",
      link: "/app-new-component",
    },
    {
      name: "Template binding",
      link: "/app-template-binding",
    },
    {
      name: "Template variables",
      link: "/app-template-variables",
    },
    {
      name: "Template deferrable views",
      link: "/app-template-deferrable-views",
    },
    {
      name: "Signals",
      link: "/app-signals",
    },
    {
      name: "Pai ou mãe(hierarquia de componentes)",
      link: "/app-pai-ou-mae",
    },
    {
      name: "Angular pipes",
      link: "/app-angular-pipes",
    },
    {
      name: "Template driven forms",
      link: "/app-template-driven-forms",
    },
    {
      name: "Reactive forms",
      link: "/app-rective-forms",
    },
    {
      name: "Ng content",
      link: "/app-content-wrapper",
    },
    {
      name: "Host elements",
      link: "/app-host-elements",
    },
    {
      name: "Life cycle",
      link: "/app-life-cycle-wrapper",
    },
    {
      name: "Services",
      link: "/app-consume-service",
    },
    {
      name: "Rota com parametro",
      link: "/app-rota-com-parametro",
      parametro: true
    },
  ])
}
