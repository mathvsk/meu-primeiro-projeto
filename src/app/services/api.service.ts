import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, Observable, shareReplay, tap } from 'rxjs';

interface ITask {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  #http = inject(HttpClient);
  #url = signal(environment.apiTask);

  // novo
  public name = signal("Matheus");

  // antigo
  public name$ = new BehaviorSubject("Igor");
  constructor() { }

  #setListTask = signal<ITask[] | null>(null);
  get getListTask() {
    return this.#setListTask.asReadonly();
  }
  public httpListTask$(): Observable<ITask[]> {
    return this.#http.get<ITask[]>(this.#url())
    .pipe(
      shareReplay(), //evita multiplas chamadas
      tap((res) => {
        console.log(res);
        this.#setListTask.set(res);
      }) // faz a injeção de dados no parametro
    );
  }

  #setTaskId = signal<ITask | null>(null);
  get getTaskId() {
    return this.#setTaskId.asReadonly();
  }
  public httpTaskId$(id: string): Observable<ITask> {
    return this.#http.get<ITask>(`${this.#url()}${id}`)
    .pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res))
    );
  }

  #setPostTask = signal<ITask | null>(null);
  get postTask() {
    return this.#setPostTask.asReadonly();
  }
  public httpPostTask$(title: string): Observable<ITask> {
    return this.#http.post<ITask>(this.#url(), {
      title
    })
    .pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res))
    );
  }

  #setPatchTask = signal<ITask | null>(null);
  get patchTask() {
    return this.#setPatchTask.asReadonly();
  }
  public httpPatchTask$(id: string, title: string): Observable<ITask> {
    return this.#http.patch<ITask>(`${this.#url()}${id}`, {
      title
    })
    .pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res))
    );
  }

  #setDeleteTask = signal<ITask | null>(null);
  get deleteTask() {
    return this.#setDeleteTask.asReadonly();
  }
  public httpDeleteTask$(id: string): Observable<void> {
    return this.#http.delete<ITask>(`${this.#url()}${id}`)
    .pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res))
    );
  }
}
