import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {
  @ViewChild('name') nameInput!: ElementRef;
  @ViewChild('h2') nameh2!: ElementRef;
  
  ngAfterViewInit(): void {
    console.log(this.nameInput);
    console.log(this.nameh2);

    this.nameInput.nativeElement.focus();
    this.nameh2.nativeElement.style.color = 'red';
  }
}
