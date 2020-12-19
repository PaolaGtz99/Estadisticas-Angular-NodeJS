import { Buscar2Component } from './buscar2/buscar2.component';
import { Buscar1Component } from './buscar1/buscar1.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'buscar1', component: Buscar1Component },
  { path: 'buscar2', component: Buscar2Component },
  { path: '**', pathMatch: 'full', redirectTo: 'buscar1'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
