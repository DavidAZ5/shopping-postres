import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsComponent } from './list-products.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'todo',
    pathMatch: 'full'
  },
  {
    path: ':category',
    component: ListProductsComponent,
  },
  {
    path: 'todo',
    component: ListProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProductsRoutingModule { }
