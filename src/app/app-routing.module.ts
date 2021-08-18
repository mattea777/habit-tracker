import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
{ path: '', redirectTo:'home', pathMatch:'full'},
{ path: 'home', component: AppComponent},
{ path: 'habits', loadChildren: () => import('./habits/habits.module').then(m => m.HabitsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
