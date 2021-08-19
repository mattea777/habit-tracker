import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HabitRoutingModule } from './habit-routing.module';
import { HabitComponent } from './habit.component';


@NgModule({
  declarations: [
    HabitComponent
  ],
  imports: [
    CommonModule,
    HabitRoutingModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class HabitModule { }
