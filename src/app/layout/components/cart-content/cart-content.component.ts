import { Component, OnInit, Input } from '@angular/core';
import { CartService, ProductoCarrito } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {
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
