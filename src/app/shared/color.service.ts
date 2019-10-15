import { Injectable } from '@angular/core';
import { Led } from '../model/led';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  constructor(private client: HttpClient) {}

  readLeds(): Promise<Led[]> {
    return this.client
      .get<string[]>(
        'https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api/colors'
      )
      .pipe(
        map(colors => {
          const leds: Led[] = [];

          for (let index = 0; index < colors.length; index++) {
            const led = {
              index: index,
              color: colors[index]
            };
            leds.push(led);
          }

          return leds;
        })
      )
      .toPromise();
  }
}
