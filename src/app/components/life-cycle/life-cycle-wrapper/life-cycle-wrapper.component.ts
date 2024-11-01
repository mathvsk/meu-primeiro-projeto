import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { LifeCycleComponent } from "../life-cycle.component";

@Component({
  selector: 'app-life-cycle-wrapper',
  standalone: true,
  imports: [LifeCycleComponent],
  templateUrl: './life-cycle-wrapper.component.html',
  styleUrl: './life-cycle-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCycleWrapperComponent implements OnInit{
  public myNumber$ = signal(0);
  public exibirComponente = true;

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
