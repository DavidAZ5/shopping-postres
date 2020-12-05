import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper/bundle';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  
  }

  sliderData: any[]= [
    'https://i.pinimg.com/originals/e2/bb/c7/e2bbc7bf97a203ac86bb6e423300d3f0.jpg',
    'http://www.chinawok.com.pe/media/wysiwyg/1604331833_comparte-banquetes-2.png',
    'https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-dessert-food-promotion-banner-design-image_149861.jpg'
  ];
  mySwiper: Swiper;
  ngAfterViewInit(): void {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: { delay: 3000, },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
    })
  }

  onSlideNext(){
    this.mySwiper.slideNext();
  }
  onSlidePrev(){
    this.mySwiper.slidePrev();
  }
  

}
