import { Component, OnInit } from '@angular/core';
import { CartMobilService } from '../../../services/cart-mobil.service'
import { ProductoCarrito, CartService } from '../../../services/cart.service';
import { Observable } from 'rxjs';
import { map, switchMap, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cart-mobil-button',
  templateUrl: './cart-mobil-button.component.html',
  styleUrls: ['./cart-mobil-button.component.css']
})
export class CartMobilButtonComponent implements OnInit {
  quantity$: Observable<number>;
  totalPrice$: Observable<number>;

  constructor(
    private cartMobilService: CartMobilService,
    private cart: CartService
  ) { }

  ngOnInit(): void {
    this.quantity$=this.cart.items$
    .pipe(
      map(items => {
          var sum = 0;
          for (let item of items ){
            sum=sum + item.cantidad;
          }
          return sum;
      })
    );

    this.totalPrice$=this.cart.items$
    .pipe(
      map(items => {
          var sum = 0;
          for (let item of items ){
            sum=sum + item.cantidad * item.price;
          }
          return sum;
      })
    );
  }

  openCartMobile(){
    this.cartMobilService.open_close = false;
  }
}
