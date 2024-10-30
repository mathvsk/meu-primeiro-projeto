import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  host: {
    role: 'button',
    '[attr.class]': 'class',
    '(document:keypress)': 'onKeyPress($event)',
  }
})
export class HostElementsComponent {
  // Maneira antiga de usar host
  // @HostBinding('attr.class') public class = 'host-elements';
  
  public class = 'host-elements';

  public onKeyPress(event: KeyboardEvent): void {
    console.log('HostElementsComponent.onKeyPress', event);
  }
}
