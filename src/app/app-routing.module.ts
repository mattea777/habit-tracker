import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
{ path: 'habits', loadChildren: () => import('./habit/habit.module').then(m => m.HabitModule) },
{
  path: 'habits/:id/edit', component: AddComponent
},
{
  path: 'add', component: AddComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
