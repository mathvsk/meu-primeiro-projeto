import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponentComponent implements OnInit {
  private _apiService = inject(ApiService);

  ngOnInit(): void {
    // novo
    console.log(this._apiService.name());

    // antigo
    this._apiService.name$.subscribe({
      next: (name) => console.log(name),
      error: (error) => console.error(error),
      complete: () => console.log('Complete')
    });

    this._apiService.name$.next("Novo Valor");
  }
}
