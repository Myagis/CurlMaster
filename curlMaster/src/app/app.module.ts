import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppRoutingModule } from './app-routing.module';
import { AllWorkoutsComponent } from './components/all-workouts/all-workouts.component';

@NgModule({
  declarations: [AllWorkoutsComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule.withComponents([])],
  providers: [],
  bootstrap: [AllWorkoutsComponent],
})
export class AppModule {}
