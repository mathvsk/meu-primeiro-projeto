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
  public getListTask = this.#setListTask.asReadonly();
  public httpListTask$(): Observable<ITask[]> {
    return this.#http.get<ITask[]>(this.#url())
    .pipe(
      shareReplay(), //evita multiplas chamadas
      tap((res) => this.#setListTask.set(res)) // faz a injeção de dados no parametro
    );
  }
}
