import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceriesComponent } from './component/groceries/groceries.component';

const routes: Routes = [
  {path: 'groceries', component: GroceriesComponent},
  {path: '**', redirectTo: 'groceries'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
