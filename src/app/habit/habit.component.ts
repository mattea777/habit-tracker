import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { Habit } from 'src/models/habit';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitService } from '../_services/habit.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent implements OnInit,OnDestroy {
  public habits!: Habit[];
  habits$!: Observable<Habit[]>;
  public habitId!: string | null

  constructor(public router: Router,
    private habitService: HabitService
    ) {}

  ngOnInit(): void {
    this.habits$ = this.habitService.getHabits()


  }
  ngOnDestroy(): void{
    
  }

  public onDelete(index: string | null) {
    console.log(index)
    this.habitService.deleteHabit(index).subscribe()
  }

}
