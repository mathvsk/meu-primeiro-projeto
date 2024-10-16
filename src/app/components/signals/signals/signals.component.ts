import { Component, computed, signal } from '@angular/core';

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

  constructor() {}

  public updateName() {
    this.firstName.set("Igor");
  }

  public updateArray() {
    this.array.update((oldValue) => {
      return [...oldValue, oldValue.length + 1];
    });
  }
}
