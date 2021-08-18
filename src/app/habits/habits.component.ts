import { OnDestroy, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Habit } from '../models/habit';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-habit',
  templateUrl: './habits.component.html',
  styleUrls: ['./habits.component.css']
})


export class HabitsComponent implements OnInit,OnDestroy {

  @Input() habit!:Habit;

  @Input() habitIndex!:number;

  @Output() deleteEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output() editEvent: EventEmitter<number> = new EventEmitter<number>();
  constructor(private route: ActivatedRoute,
    private router: Router) { 
    this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit(): void {
    console.log('Habit index is:', this.habitIndex)
  }

  ngOnDestroy(): void{
    console.log('Habit #',this.habitIndex, 'is destroyed')
  }

  onDelete(){
    console.log('Habit #',this.habitIndex, 'is deleted')
    this.deleteEvent.emit(this.habitIndex)

  }

  onEdit(){
    console.log('Habit #',this.habitIndex, 'is being edited.')
    this.editEvent.emit(this.habitIndex)
  }

  habitClick(){
    this.router.navigate(['habit', this.habitIndex,'view'])
  }

}
