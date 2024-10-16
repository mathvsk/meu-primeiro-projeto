import { Component } from '@angular/core';
import { NewComponentComponent } from "../../new-component/new-component.component";

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [NewComponentComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {

}
