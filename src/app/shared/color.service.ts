import { Injectable } from '@angular/core';
import { Led } from '../model/led';
import { HttpClient } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import * as tinycolor from 'tinycolor2';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  constructor(private client: HttpClient) {}

  updateLed(
    index: number,
    color = tinycolor.random().toString()
  ): Observable<string> {
    const url = `https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api/colors/${index}`;

    const body = { color };

    const res$ = this.client.put(url, body, {
      responseType: 'text'
    });

    return res$;
  }

  readLeds(): Observable<Led[]> {
    return this.client
      .get<string[]>(
        'https://ae680a0551cf8bd14b83c131e0796b82.balena-devices.com/api/colors'
      )
      .pipe(
        catchError(err =>
          of([
            'red',
            'green',
            'blue',
            'white',
            'cyan',
            'magenta',
            'yellow',
            'black'
          ])
        ),
        map(colors =>
          colors.map((color, index) => ({
            index,
            color
          }))
        )
      );
  }

  // const leds: Led[] = [];

  // for (let index = 0; index < colors.length; index++) {
  //   const led = {
  //     index: index,
  //     color: colors[index]
  //   };
  //   leds.push(led);
  // }

  // return leds;
}
