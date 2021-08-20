import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './habit/add/add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
{ path: 'habits', loadChildren: () => import('./habit/habit.module').then(m => m.HabitModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
