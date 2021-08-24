import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
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
    id: new FormControl(''),
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
    if (this.habitId != null){
    console.log(this.habitId)
    this.habitService.getHabit(this.habitId).subscribe(res => {
      this.habitForm.patchValue(res)
    })}


  }

  public onSubmit() {
    const habit = this.habitForm.value as Habit;
    if (this.router.url === '/habit/add'){
      console.log('adding')
       this.habitService.addHabit(habit).subscribe(() => this.router.navigate(['habit']))
    }
    else{
      console.log("WTF?", this.router.url)
    this.habitService.editHabit(this.habitId, habit).subscribe(() => this.router.navigate(['habit']))
    }
    
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
    this.router.navigate(['/habit'])
  }

}


