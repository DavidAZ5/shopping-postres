import { Component, OnInit } from '@angular/core';
import { CartMobilService } from '../../../services/cart-mobil.service'

@Component({
  selector: 'app-cart-mobil-button',
  templateUrl: './cart-mobil-button.component.html',
  styleUrls: ['./cart-mobil-button.component.css']
})
export class CartMobilButtonComponent implements OnInit {

  constructor(
    private cartMobilService: CartMobilService
  ) { }

  ngOnInit(): void {
  }

  openCartMobile(){
    this.cartMobilService.open_close = false;
  }
}
