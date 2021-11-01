import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AllWorkoutsComponent } from './components/all-workouts/all-workouts.component';

@NgModule({
  declarations: [AllWorkoutsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AllWorkoutsComponent],
})
export class AppModule {}
