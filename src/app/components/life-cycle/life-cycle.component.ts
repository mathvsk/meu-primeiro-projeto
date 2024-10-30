import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnChanges {
  @Input() public myNumber = 0;

  // Inicializado quando o componente é criado
  constructor() {}

  // Changes detections

  // Chamado quando os dados de entrada @input mudam
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    console.log('myNumber', changes['myNumber'].currentValue);
  }

}
