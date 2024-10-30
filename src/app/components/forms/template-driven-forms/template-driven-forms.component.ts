import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {
  public comidas$ = signal<Array<{comidas: string, preco:string}>>([
    {
      comidas: 'Pizza',
      preco: 'R$ 20,00'
    },
    {
      comidas: 'Hamburguer',
      preco: 'R$ 15,00'
    },
    {
      comidas: 'Macarrão',
      preco: 'R$ 10,00'
    }
  ]);

  submitForm(form: NgForm) {
    if (form.invalid) {
      alert('Formulário inválido');
    }

    console.log(form.value);
  }
}
