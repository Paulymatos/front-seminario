import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'botoes'
})
export class BotoesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
