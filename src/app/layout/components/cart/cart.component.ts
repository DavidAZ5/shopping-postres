import { Component, OnInit } from '@angular/core';
import { CartService,ProductoCarrito } from '../../../services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private destroy$: Subject<void> = new Subject();
  CartProductos: ProductoCarrito[]=[];
  compraTotal:number=0;
  constructor(
    public cart: CartService
  ) { }

  ngOnInit(): void {
    this.cart.items$.pipe(takeUntil(this.destroy$)).subscribe(items => {
      this.CartProductos = items;
      this.compraTotal=this.suma_cantidades(items);
      console.log(items);
    });
  }
  
  suma_cantidades(products_card: ProductoCarrito[]){
    var sumPrecios = 0;
    for (let p of products_card ){
      sumPrecios=sumPrecios + p.cantidad * p.price;
    }
    return sumPrecios;
  }

}
