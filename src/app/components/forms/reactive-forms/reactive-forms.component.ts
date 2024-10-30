import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

function textValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    if (control.value === 'Matheus') {
      return null;
    }

    return { invalidText: true };
  }
}

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  #fb = inject(FormBuilder); // usar # entende que o atributo é privado

  // constructor(private _fb: FormBuilder) {}

  public profileForm = this.#fb.group({
    name: ["", [Validators.minLength(5), textValidator()]],
    myStacks: this.#fb.group({
      front: ['Angular'],
      back: ['Node.js']
    }),
    myFavoriteFoods: this.#fb.array([
      ['Pizza'],
    ])
  });

  public update() {
    this.profileForm.patchValue({
      name: 'John Doe',
      myStacks: {
        front: 'React',
        back: 'Express.js'
      }
    });
  }

  public addFavoriteFood(newFood: string) {
    const foods = this.profileForm.get('myFavoriteFoods') as FormArray
    const addFood = new FormControl(newFood);
    
    foods.push(addFood);
  }

  public submit() {
    if (!this.profileForm.valid) {
      alert("Preencha o formulario corretamente");
    }

    alert(JSON.stringify(this.profileForm.value));
  }
}
