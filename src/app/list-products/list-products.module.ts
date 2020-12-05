import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductsRoutingModule } from './list-products-routing.module';
import { ListProductsComponent } from './list-products.component';
import { TitleCategoryComponent } from './components/title-category/title-category.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    ListProductsComponent,
    TitleCategoryComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ListProductsRoutingModule
  ]
})
export class ListProductsModule { }
