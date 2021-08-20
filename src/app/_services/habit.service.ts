import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habit } from 'src/models/habit';

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private API_ROOT: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getHabits(): Observable<any>{
    //insert true type in lieu of any
    return this.http.get<any>(`${this.API_ROOT}/habits`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'body'
    })
  }
}
