import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartMobilService } from '../../../services/cart-mobil.service'
import { CartService,ProductoCarrito } from '../../../services/cart.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-cart-mobil',
  templateUrl: './cart-mobil.component.html',
  styleUrls: ['./cart-mobil.component.css']
})
export class CartMobilComponent implements OnInit, OnDestroy {
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  enviarWhatsapp(){
    var text = "Hola, D'Thaly quiero solicitar este pedido: || ";
    var total = 0;
    for (let p_c of this.CartProductos ){
      text = text +p_c.cantidad+" unidad(es) de "+p_c.name+" con precio de S/."+p_c.price+ " || ";
      total = total + p_c.cantidad * p_c.price;
    }
    text=text+"El total del pedido es S/"+total;
    var numero_whatsapp = "989069102";
    window.open(`https://api.whatsapp.com/send?phone=51${numero_whatsapp}&text=${text}`,"_blank");
    //window.location.href=`https://api.whatsapp.com/send?phone=51990334381&text=${text}`;
    this.cart.vaciarCart();
  }
}
