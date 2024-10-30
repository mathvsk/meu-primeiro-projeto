import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  public profileForm = new FormGroup({
    name: new FormControl(''),
    myStacks: new FormGroup({
      front: new FormControl('Angular'),
      back: new FormControl('Node.js')
    }),
    myFavoriteFoods: new FormArray([])
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
}
