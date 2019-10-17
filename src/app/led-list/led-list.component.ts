import { Component, OnInit, OnDestroy } from '@angular/core';
import { Led } from '../model/led';
import { ColorService } from '../shared/color.service';
import { tap } from 'rxjs/operators';
import { timer, Subscription, Observable } from 'rxjs';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.css']
})
export class LedListComponent implements OnInit, OnDestroy {
  leds: Led[];

  timer$: Observable<number>;

  private sub: Subscription;

  constructor(private service: ColorService) {}

  ngOnInit() {
    this.timer$ = timer(5000, 30000).pipe(tap(res => console.log(res)));

    const leds$ = this.service.readLeds();

    leds$.pipe(tap(res => console.log(res))).subscribe({
      next: res => {
        this.leds = res;
      },
      complete: () => console.log('done')
    });
  }

  readLeds() {
    // TODO liste der leds laden
  }

  updateLed(index: number) {
    this.service.updateLed(index).subscribe({
      next: res => {
        this.leds[index] = { index, color: res };
      }
    });
  }

  ngOnDestroy() {
    // if (this.sub) {
    //   this.sub.unsubscribe();
    // }
  }
}
