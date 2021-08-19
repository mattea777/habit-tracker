import { Component, OnInit, Input, Output } from '@angular/core';
import { Habit } from 'src/models/habit';
import { FormControl, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent implements OnInit {

  @Input() habit!:Habit;

  @Input() habitIndex!:number;

  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output() editEvent: EventEmitter<number> = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  public habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });


  public habits: Habit[] = [
    <Habit>{
      name: '15 Minute Walk',
      frequency: 'Daily',
      description:
        'This habit makes my kitchen look nice and makes my day better the next morning.',
    },
    <Habit>{
      name: 'Weed the Garden',
      frequency: 'Weekly',
      description:
        'The weeds get so out of hand if they wait any longer, and I like how nice our home looks with a clean lawn.',
    }
  ];
  public setEditForm(habit: Habit, index: number) {
    this.habitForm.patchValue({
      name: habit.name,
      frequency: habit.frequency,
      description: habit.description,
    });
    
  }

  onDelete(){
    console.log('Habit #',this.habitIndex, 'is deleted')
    this.deleteEvent.emit(this.habitIndex)

  }
  
  onEdit(){
    console.log('Habit #',this.habitIndex, 'is being edited.')
    this.editEvent.emit(this.habitIndex)
  }

}
