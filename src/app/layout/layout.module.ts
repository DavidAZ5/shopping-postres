import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SliderComponent } from './components/slider/slider.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderStickyComponent } from './components/header-sticky/header-sticky.component';
import { CartMobilButtonComponent } from './components/cart-mobil-button/cart-mobil-button.component';
import { CartMobilComponent } from './components/cart-mobil/cart-mobil.component';
import { CartMobilContentComponent } from './components/cart-mobil-content/cart-mobil-content.component';
import { CartContentComponent } from './components/cart-content/cart-content.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    NavbarComponent,
    SliderComponent,
    CartComponent,
    HeaderStickyComponent,
    CartMobilButtonComponent,
    CartMobilComponent,
    CartMobilContentComponent,
    CartContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
