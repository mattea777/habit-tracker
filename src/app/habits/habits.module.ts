import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HabitsRoutingModule } from './habits-routing.module';
import { HabitsComponent } from './habits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [
    HabitsComponent
  ],
  imports: [
    CommonModule,
    HabitsRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule
  ]
})
export class HabitsModule { }
