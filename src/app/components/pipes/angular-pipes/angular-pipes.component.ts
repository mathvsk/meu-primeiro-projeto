import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, PercentPipe, registerLocaleData, UpperCasePipe } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [DatePipe, UpperCasePipe, JsonPipe, AsyncPipe, CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss'
})
export class AngularPipesComponent {
  public date = signal(new Date());
  public json = signal({ name: 'Angular', version: 11 });
  public loadingData$: Observable<string[]> = of(['Angular', 'React', 'Vue']).pipe(delay(2000)); 
}
