import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AllWorkoutsComponent } from './components/all-workouts/all-workouts.component';

@NgModule({
  declarations: [AllWorkoutsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AllWorkoutsComponent],
})
export class AppModule {}
