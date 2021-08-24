import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { HabitComponent } from './habit.component';
import { AppComponent } from '../app.component'



const routes: Routes = [{ path: '', component: HabitComponent },
{
  path: ':id/edit', component:AddComponent
},
{
  path:'add', component:AddComponent
},
{
  path: ':id/delete', component:HabitComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HabitRoutingModule { }
