import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  // Maneira sem singal
  // @Input({
  //   alias: "inputNameAlias",
  //   required: true,
  //   transform: (value: string) => value.toUpperCase()
  // }) public inputName = "inputName";

  // Maneira com signal
  public inputName = signal("inputName");
  @Input() set name(value: string) {
    this.inputName.set(value);
  };
}
