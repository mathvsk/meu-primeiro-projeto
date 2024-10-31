import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from 'environments/environment';
import { BehaviorSubject, catchError, Observable, shareReplay, tap, throwError } from 'rxjs';

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
    this.#setListTask.set(null);
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
  #setTaskIdError = signal<HttpErrorResponse | null>(null);
  get getTaskIdError() {
    return this.#setTaskIdError.asReadonly();
  }
  public httpTaskId$(id: string): Observable<ITask> {
    this.#setTaskId.set(null);
    this.#setTaskIdError.set(null);

    return this.#http.get<ITask>(`${this.#url()}${id}`)
    .pipe(
      shareReplay(),
      tap((res) => this.#setTaskId.set(res)),
      catchError((err: HttpErrorResponse) => {
        this.#setTaskIdError.set(err);
        return throwError(() => err);
      })
    );
  }

  public httpPostTask$(title: string): Observable<ITask> {
    return this.#http.post<ITask>(this.#url(), {
      title
    })
    .pipe(shareReplay());
  }

  public httpPatchTask$(id: string, title: string): Observable<ITask> {
    return this.#http.patch<ITask>(`${this.#url()}${id}`, {
      title
    })
    .pipe(shareReplay());
  }

  public httpDeleteTask$(id: string): Observable<void> {
    return this.#http.delete<void>(`${this.#url()}${id}`)
    .pipe(shareReplay());
  }
}
