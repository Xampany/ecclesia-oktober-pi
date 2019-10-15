import { Component, OnInit, Input } from '@angular/core';
import { Led } from '../model/led';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.css']
})
export class LedComponent implements OnInit {
  @Input()
  led: Led;

  start = 2;

  constructor() {}

  ngOnInit() {}

  handleClick(ev: MouseEvent | TouchEvent) {
    if (ev.ctrlKey) {
      console.log('ctrl clicked', ev);
    }
  }
}
