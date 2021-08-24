import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habit } from 'src/models/habit';


@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    });
    console.log('HTTP Interceptor', authReq)
    return next.handle(req);
  }
}

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private API_ROOT: string = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getHabits(): Observable<any>{
    //insert true type in lieu of any
    return this.http.get<Habit>(`${this.API_ROOT}/habits`,{observe:'body'})
  }

  getHabit(id: string | null): Observable<Habit>{
    return this.http.get<Habit>(`${this.API_ROOT}/habits/${id}`,{observe:'body'})
    }

  editHabit(id: string | null, habit: Habit): Observable<any>{
    return this.http.put<any>(`${this.API_ROOT}/habits/${id}`, habit)
    
  }

  addHabit(habit: Habit): Observable<any>{
    return this.http.post<any>(`${this.API_ROOT}/habits/`, habit)
  }

  deleteHabit(id: string | null): Observable<any>{
    return this.http.delete<any>(`${this.API_ROOT}/habits/${id}`)
  }
  }
