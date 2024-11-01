import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentComponent } from "../content.component";

@Component({
  selector: 'app-content-wrapper',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './content-wrapper.component.html',
  styleUrl: './content-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentWrapperComponent {

}
