import { Component, OnInit } from '@angular/core';
import { WORKOUT } from '../../shared/workout';
import { WORKOUTS } from '../../shared/mock-workouts';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-all-workouts',
  templateUrl: './all-workouts.component.html',
  styleUrls: ['./all-workouts.component.css'],
})
export class AllWorkoutsComponent implements OnInit {
  workouts: WORKOUT[] = WORKOUTS;

  constructor() {}

  ngOnInit(): void {}

  columnDefs: ColDef[] = [
    { field: 'Exersice', sortable: true },
    { field: 'BodyPart', sortable: true },
  ];

  rowData = WORKOUTS;
}
