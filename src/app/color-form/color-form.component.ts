import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Led } from '../model/led';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { tap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pi-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.css']
})
export class ColorFormComponent implements OnInit {
  @Output()
  update = new EventEmitter<object>();

  color = 'red';

  form: FormGroup;

  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      color: new FormControl('goldenrod', [
        Validators.required,
        Validators.minLength(3)
      ])
    });

    this.form.valueChanges
      .pipe(
        debounceTime(200),
        tap(value => console.log(value))
      )
      .subscribe();
  }

  updateColor(value: Pick<Led, 'color'>) {
    this.update.emit(value);
  }
}
