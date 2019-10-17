import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { Led } from '../model/led';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LedComponent implements OnInit {
  @Input()
  led: Led;

  @Output()
  ledClick = new EventEmitter<number>();

  start = 2;

  constructor() {}

  ngOnInit() {}

  handleClick(ev: MouseEvent | TouchEvent) {
    if (ev.ctrlKey) {
      this.ledClick.emit(this.led.index);
    }
  }
}
