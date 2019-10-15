import { Pipe, PipeTransform } from '@angular/core';
import * as tinycolor from 'tinycolor2';

@Pipe({
  name: 'piColor'
})
export class PiColorPipe implements PipeTransform {
  transform(value: string, format: 'hex6' | 'rgb' | 'name'): string {
    return tinycolor(value).toString(format);
  }
}
