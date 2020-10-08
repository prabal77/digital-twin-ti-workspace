import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalTwinDisplayComponent } from './digital-twin-display/digital-twin-display.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'twins/:id', component: DigitalTwinDisplayComponent
  },
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
