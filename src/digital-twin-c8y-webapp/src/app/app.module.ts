import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule, BootstrapComponent } from '@c8y/ngx-components';
import { HomeComponent } from './home/home.component';
import { DigitalTwinDisplayComponent } from './digital-twin-display/digital-twin-display.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [BootstrapComponent],
  declarations: [HomeComponent, DigitalTwinDisplayComponent]
})
export class AppModule { }