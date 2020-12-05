import { Component, OnInit } from '@angular/core';
import { CartMobilService } from '../../../services/cart-mobil.service'

@Component({
  selector: 'app-cart-mobil',
  templateUrl: './cart-mobil.component.html',
  styleUrls: ['./cart-mobil.component.css']
})
export class CartMobilComponent implements OnInit {

  constructor(
    public cartMobilService: CartMobilService
  ) { }

  ngOnInit(): void {
  }

  closeCartMobile(){
    setTimeout(()=>{
      this.cartMobilService.open_close = true;
    },500)
  }
}
