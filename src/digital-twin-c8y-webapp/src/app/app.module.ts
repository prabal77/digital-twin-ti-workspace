import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BootstrapComponent, CoreModule } from '@c8y/ngx-components';
import { AppRoutingModule } from './app-routing.module';
import { DeviceListComponent } from './device-list/device-list.component';
import { DigitalTwinDisplayComponent } from './digital-twin-display/digital-twin-display.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { AssetListPanelComponent } from './asset-list-panel/asset-list-panel.component';
import { CanvasComponent } from './canvas/canvas.component';
import { GojsAngularModule } from 'gojs-angular';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    GojsAngularModule
  ],
  providers: [],
  bootstrap: [BootstrapComponent],
  declarations: [HomeComponent, DigitalTwinDisplayComponent, DeviceListComponent, AssetListPanelComponent, CanvasComponent]
})
export class AppModule { }