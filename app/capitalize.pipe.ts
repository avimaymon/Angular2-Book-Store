import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizeTitlePipe {
  transform(value: string): string {
    return value.replace(/\w\S*/g, function (txt) { return txt.toLowerCase().charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });;
  }
}