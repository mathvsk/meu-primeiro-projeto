import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, signal, SimpleChanges, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {
  public myNumber = signal(0);
  @Input() set inputMyNumber(value: number) {
    this.myNumber.set(value);
  };
  public myText$ = signal("Matheus");
  // private $destroy = timer(0, 1000)
  // .pipe(
  //   takeUntilDestroyed()
  // ).subscribe({
  //   next: (next) => console.log('next', next),
  //   error: (error) => console.error('error', error),
  //   complete: () => console.log('complete')
  // });

  // Inicializado quando o componente é criado
  constructor() {}

  // Changes detections

  // Chamado quando os dados de entrada @input mudam
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    console.log('myNumber', changes['inputMyNumber'].currentValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // Executa antes e depois de cada ciclo de detecção de mudanças
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // Chamado uma vez após a exibição do template e suas visualizações filhas serem totalmente inicializadas
  @ViewChild('content') public content!: ElementRef;
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.content.nativeElement.innerText);
  }

  // Semelhante ao ngAfterViewInit, mas é chamado após a exibição do conteúdo do componente
  @ContentChild('text') public text!: ElementRef;
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit', this.text.nativeElement.innerText);
  }

  // Chamado após a verificação do conteudo do componente e quando o conteudo é alterado
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // Chamado quando a view inteira é verificada
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // Chamado antes de destruir o componente
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // this.$destroy.unsubscribe();
  }
}
