import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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


}
