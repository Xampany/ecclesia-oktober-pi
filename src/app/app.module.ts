import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';
import { PiColorPipe } from './shared/pi-color.pipe';
import { LedListComponent } from './led-list/led-list.component';

@NgModule({
  declarations: [AppComponent, LedComponent, PiColorPipe, LedListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
