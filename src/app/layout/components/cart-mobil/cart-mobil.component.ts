import { Component, OnInit } from '@angular/core';
import { CartMobilService } from '../../../services/cart-mobil.service'
import { CartService,ProductoCarrito } from '../../../services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-cart-mobil',
  templateUrl: './cart-mobil.component.html',
  styleUrls: ['./cart-mobil.component.css']
})
export class CartMobilComponent implements OnInit {
  private destroy$: Subject<void> = new Subject();
  CartProductos: ProductoCarrito[]=[];
  compraTotal:number=0;
  constructor(
    public cart: CartService,
    public cartMobilService: CartMobilService
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

  closeCartMobile(){
    setTimeout(()=>{
      this.cartMobilService.open_close = true;
    },250)
  }
}
