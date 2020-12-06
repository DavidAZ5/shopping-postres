import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../interfaces/producto';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  
  constructor(
    private router: Router, 
    private activeRoute:ActivatedRoute
  ) { 
    
    setTimeout(()=>{
      document.getElementById('head').scrollIntoView({ block: 'center',  behavior: 'smooth', inline: 'nearest' });
     // window.scrollTo(0, 0);
    },200)
      
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe(text =>{
      console.log(text.category);
      document.getElementById('divElem').scrollIntoView({ block: 'center',  behavior: 'smooth', inline: 'nearest' });
      
    } );


  }

  data:Producto[] = [
    {
      id:1,
      nombre: 'ffff',
      precio: 12
    },
    {
      id:2,
      nombre: 'hhh',
      precio: 8
    },
    {
      id:3,
      nombre: 'iiiiii',
      precio: 7
    },
    {
      id:4,
      nombre: 'oooo',
      precio: 20
    },
    {
      id:5,
      nombre: 'eeeee',
      precio: 15
    },
    {
      id:6,
      nombre: 'ttt',
      precio: 14
    },
    {
      id:7,
      nombre: 'aaa',
      precio: 25
    },

  ]


}
