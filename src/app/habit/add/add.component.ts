import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HABITS } from '../../data/habits';
import { Habit } from 'src/models/habit';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(public router: Router) { }


  habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  editingIndex!: number;

  public habits!: Habit[];


  ngOnInit(): void {
    this.habits = HABITS;
  }

  public onSubmit() {
    const habit = this.habitForm.value as Habit;

    this.habits.push(this.habitForm.value as Habit);
    this.exitForm();
  }

  public setEditForm(habit: Habit, index: number) {
    this.habitForm.patchValue({
      name: habit.name,
      frequency: habit.frequency,
      description: habit.description,
    });
    this.editingIndex = index;
  }

  exitForm() {
    this.habitForm.reset();
    this.router.navigate(['/habits'])
  }

}
