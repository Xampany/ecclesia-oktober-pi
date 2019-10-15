import { Component, OnInit } from '@angular/core';
import { Led } from '../model/led';
import { ColorService } from '../shared/color.service';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.css']
})
export class LedListComponent implements OnInit {
  leds: Led[];

  constructor(private service: ColorService) {}

  ngOnInit() {
    this.service.readLeds().then(res => {
      this.leds = res;
    });
  }
}
