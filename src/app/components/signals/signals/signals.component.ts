import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal("Matheus");
  public lastName = signal("Viscki");
  public array = signal([1]);

  public fullName = computed(() => {
    return `Full name: ${this.firstName()} ${this.lastName()}`;
  });

    /*
      effect - raramente são necessários na maioria dos códigos,
      mas podem ser úteis em circunstâncias específicas.
      - Registro de dados sendo exibidos e quando eles mudam, seja para análise
        ou como ferramenta de depuração.

      - Manter os dados sincronizados com o window.localStorage.

      - Adicionando comportamento DOM personalizado que não pode ser expresso com
        sintaxe de modelo.

      - Executar renderização personalizada em um <canvas>, biblioteca de gráficos
        ou outra biblioteca de UI de terceiros.
    */

  constructor() {
    effect(() => {
      console.log(this.fullName())
    });
  }

  public updateName() {
    this.firstName.set("Igor");
  }

  public updateArray() {
    this.array.update((oldValue) => {
      return [...oldValue, oldValue.length + 1];
    });
  }
}
