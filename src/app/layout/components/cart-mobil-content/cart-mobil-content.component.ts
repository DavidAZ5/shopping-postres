import { Component, OnInit, Input } from '@angular/core';
import { CartService, ProductoCarrito } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-mobil-content',
  templateUrl: './cart-mobil-content.component.html',
  styleUrls: ['./cart-mobil-content.component.css']
})
export class CartMobilContentComponent implements OnInit {
  @Input() product: ProductoCarrito;
  mas:boolean;
  menos:boolean;
  constructor(
    private cart: CartService
  ) { }

  ngOnInit(): void {
  }

  aumentarItem(){
    this.cart.addCart_plus(this.product.id);
  }
  disminuirItem(){
    this.cart.quitarCart(this.product.id);
  }
}
