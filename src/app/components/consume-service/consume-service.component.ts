import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NewComponentComponent } from '@components/new-component/new-component.component';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [NewComponentComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit{
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
  }

}
