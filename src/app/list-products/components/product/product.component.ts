import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../../interfaces/producto';
import { CartService, ProductoCarrito } from '../../../services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  //https://www.thespruceeats.com/thmb/W-Ur-ceUIwo0XLyBPzT2VwcwgJU=/1500x1000/filters:fill(auto,1)/gluten-free-new-york-cheesecake-1450985-hero-01-dc54f9daf38044238b495c7cefc191fa.jpg
  @Input() product: Producto;
  s:boolean;
  constructor(
    private cart: CartService
  ) {}

  ngOnInit(): void {
  }

  addCart(){
    let x: ProductoCarrito;
    x={
      id: this.product.id,
      name: this.product.nombre,
      price: this.product.precio
    };
    this.cart.addCart(x);
  }
}
