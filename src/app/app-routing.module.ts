import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabitComponent } from './habit/habit.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
{ path: 'habit', loadChildren: () => import('./habit/habit.module').then(m => m.HabitModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
