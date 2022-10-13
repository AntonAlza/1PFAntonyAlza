import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modificarColor'
})
export class ModificarColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
