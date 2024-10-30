import { Component, DoCheck, Input, OnChanges, OnInit, signal, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck {
  @Input() public myNumber = 0;
  public myText$ = signal("Matheus");

  // Inicializado quando o componente é criado
  constructor() {}

  // Changes detections

  // Chamado quando os dados de entrada @input mudam
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    console.log('myNumber', changes['myNumber'].currentValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // Executa antes e depois de cada ciclo de detecção de mudanças
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

}
