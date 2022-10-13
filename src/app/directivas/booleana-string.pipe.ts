import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanaString'
})
export class BooleanaStringPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
