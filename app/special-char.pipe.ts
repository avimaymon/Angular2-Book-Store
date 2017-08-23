import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'special-char' })
export class SpecialCharPipe {
  transform(value: string): string {
    return value.replace(/[^0-9a-z]/gi, ' ').replace(/\s+/g, " ");
  }
}