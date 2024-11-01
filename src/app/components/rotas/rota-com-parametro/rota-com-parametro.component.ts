import { ChangeDetectionStrategy, Component, inject, Input, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rota-com-parametro',
  standalone: true,
  imports: [],
  templateUrl: './rota-com-parametro.component.html',
  styleUrl: './rota-com-parametro.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RotaComParametroComponent implements OnInit {
  #route = inject(ActivatedRoute);
  public getId = signal<string | null>(null);
  @Input() set id(value: string) {
    this.getId.set(value);
  }

  ngOnInit(): void {
    // Maneira de resgatar o parametro da rota
    console.log(this.#route.snapshot.params["id"]);
    this.#route.params.subscribe(params => {console.log(params)});
    console.log(this.getId());
  }
}
