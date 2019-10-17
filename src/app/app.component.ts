import { Component, ViewChild } from '@angular/core';
import { LedListComponent } from './led-list/led-list.component';

@Component({
  selector: 'pi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecclesia-herbst-pi';

  @ViewChild(LedListComponent, { static: true })
  private list: LedListComponent;

  doReaload() {
    this.list.readLeds();
  }
}
