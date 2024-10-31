import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NewComponentComponent } from '@components/new-component/new-component.component';
import { ApiService } from 'app/services/api.service';
import { concat, concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [NewComponentComponent, AsyncPipe, JsonPipe],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit{
  #apiService = inject(ApiService);

  public getListTask = this.#apiService.getListTask;
  public getTaskId = this.#apiService.getTaskId;
  public getPostTask = this.#apiService.postTask;
  public getPatchTask = this.#apiService.patchTask;
  public getDeleteTask = this.#apiService.deleteTask;

  ngOnInit(): void {
    this.#apiService.httpListTask$().subscribe();
    this.#apiService.httpTaskId$("BgqYHq8EhCf7ehiPImgZ").subscribe();
  }

  public postTask(title: string): void {
    this.#apiService.httpPostTask$(title)
      .pipe(
        concatMap(() => this.#apiService.httpListTask$())
      )
      .subscribe();
  }

  
  public patchTask(id: string, title: string): void {
    console.log(id, title);
    this.#apiService.httpPatchTask$(id, title)
      .pipe(
        concatMap(() => this.#apiService.httpListTask$())
      )
      .subscribe();
  }

  public deleteTask(id: string): void {
    this.#apiService.httpDeleteTask$(id)
      .pipe(
        concatMap(() => this.#apiService.httpListTask$())
      )
      .subscribe();
  }
}
