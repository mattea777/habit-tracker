import { Component, OnInit, Input, Output } from '@angular/core';
import { Habit } from 'src/models/habit';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HABITS } from '../data/habits';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent implements OnInit {
  public habits!: Habit[];

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.habits = HABITS;
  }

  public onDelete(index: number) {
    this.habits.splice(index, 1);
  }

}
