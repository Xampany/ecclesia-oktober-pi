import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pi-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  @Output()
  reload = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  handleReload() {
    this.reload.emit();
  }
}
