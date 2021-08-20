import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { Habit } from 'src/models/habit';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { HABITS } from '../data/habits';
import { HabitService } from '../_services/habit.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent implements OnInit,OnDestroy {
  public habits!: Habit[];
  habits$!: Subscription;

  constructor(public router: Router,
    private habitService: HabitService) {}

  ngOnInit(): void {
    this.habits$ = this.habitService.getHabits().subscribe(res => {this.habits = res})


  }
  ngOnDestroy(): void{
    console.log(this.habits$)
    this.habits$.unsubscribe()
    console.log(this.habits$)
  }

  public onDelete(index: number) {
    this.habits.splice(index, 1);
  }

}
