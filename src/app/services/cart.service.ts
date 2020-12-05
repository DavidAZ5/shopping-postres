import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, Observable, Subject, timer } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { map } from 'rxjs/operators';
export interface ProductoCarrito {
  id?: number;
  name?: string;
  cantidad?: number;
  price?: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private products_cart: ProductoCarrito[] = [];
  private itemsSubject$: BehaviorSubject<ProductoCarrito[]> = new BehaviorSubject(this.products_cart);
  readonly items$: Observable<ProductoCarrito[]> = this.itemsSubject$.asObservable();
  public abrir:boolean;
  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    if (isPlatformBrowser(this.platformId)) {
        this.load();
        this.calc();
    }
  }
  
  addCart_plus(id:number){
    var cant:number=0;
    for(let i=0; i < this.products_cart.length; i++) {
      if(this.products_cart[i].id==id){
        cant = this.products_cart[i].cantidad; 
        cant=cant+1;
        this.products_cart[i].cantidad=cant;
      }

    }
    this.save();
    this.calc();
  }

  addCart(producto : ProductoCarrito){
      var cant:number=0;
      var p:string= 'no existe';
      for(let i=0; i < this.products_cart.length; i++) {
        //console.log(this.pedidoArray[i].cantidad);
        if(this.products_cart[i].id==producto.id){
          cant = this.products_cart[i].cantidad; 
          cant=cant+1;
          this.products_cart[i].cantidad=cant;
          p='si existe';
        }
      }
      if(p == 'no existe'){    
        let x: ProductoCarrito;
        x={
          id: producto.id,
          name: producto.name,
          cantidad: 1,
          price: producto.price
          };
        this.products_cart.push(x);        
      }
      //this.cart.next(this.products_cart);     
      this.save();
      this.calc();
  }
  
  quitarCart(id:number){
    var cant:number=0;
    for(let i=0; i < this.products_cart.length; i++) {
      //console.log(this.pedidoArray[i].cantidad);
      if(this.products_cart[i].id==id){
        cant = this.products_cart[i].cantidad;
        if(1<cant){
          cant=cant-1;
          this.products_cart[i].cantidad=cant;
        }else if(cant==1){
          this.products_cart = this.products_cart.filter(x => x != this.products_cart[i]);
        }  
      }
    }
    this.save();
    this.calc();
  }
  
  vaciarCart(){
    this.products_cart = [];
    this.save();
    this.calc();
  }
  
  private calc (){
    this.itemsSubject$.next(this.products_cart);
  }
  private save(): void {
    localStorage.setItem('fastShoppingCartItems', JSON.stringify(this.products_cart));
  }
  private load(): void {
    const items = localStorage.getItem('fastShoppingCartItems');

    if (items) {
      this.products_cart = JSON.parse(items);
    }
  }
}
