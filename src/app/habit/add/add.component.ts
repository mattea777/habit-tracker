import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HABITS } from '../../data/habits';
import { Habit } from 'src/models/habit';
import { HabitService } from 'src/app/_services/habit.service';
import { ThrowStmt } from '@angular/compiler';
// import {writeJsonFile} from 'write-json-file';
declare var require: any


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  
  


  habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  editingIndex!: number;
  public habitId!: string | null;


  constructor(public router: Router,
    public activatedRoute: ActivatedRoute,
    private habitService: HabitService) { 
    this.habitId = this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    console.log(this.habitId)
    this.habitService.getHabit(this.habitId).subscribe(res => {
      this.habitForm.patchValue(res)
    })


  }

  public onSubmit() {
    const habit = this.habitForm.value as Habit;
    var json = JSON.stringify(habit);
    const fs = require('fs')
    const fileName = 'assets/db.json';
    const file = require(fileName)
    file.this.habitId = json
    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err: any) {
      if (err) return console.log(err);
      console.log(JSON.stringify(file));
      console.log('writing to ' + fileName);
    });;
    this.exitForm();
  }

  // public setEditForm(habit: Habit, index: number) {
  //   this.habitForm.patchValue({
  //     name: habit.name,
  //     frequency: habit.frequency,
  //     description: habit.description,
  //   });
  //   this.editingIndex = index;
  // }

  exitForm() {
    this.habitForm.reset();
    this.router.navigate(['/habits'])
  }

}
function callback(arg0: string, json: string, arg2: string, callback: any) {
  throw new Error('Function not implemented.');
}

