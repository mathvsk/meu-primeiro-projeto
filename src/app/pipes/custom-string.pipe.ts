import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString',
  standalone: true
})
export class CustomStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + ' - Custom Pipe';
  }

}
