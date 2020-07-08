import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BookVehicleComponent } from './book-vehicle/book-vehicle.component';


const routes: Routes = [
  {
    path: '', component: LandingComponent,
  },
  {
    path: 'book', component: BookVehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
