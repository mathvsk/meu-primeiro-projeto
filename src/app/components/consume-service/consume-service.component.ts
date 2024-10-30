import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
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
  #apiService = inject(ApiService);

  public getTask = signal<null | Array<{
    id: string;
    title: string;
  }>>(null);

  ngOnInit(): void {
    this.#apiService.httpListTask$().subscribe({
      next: (tasks) => {
        console.log(tasks);

        this.getTask.set(tasks);
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {
        console.log("Complete");
      }
    });
  }

}
