import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})


export class HomeComponent implements OnInit {

  //images = ["../../../assets/images/t2.jpg", "../../../assets/images/t2.jpg", "../../../assets/images/t2.jpg"];

  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);
  monthsImages = ["../../../assets/images/g6.jpg", "../../../assets/images/g6.jpg", "../../../assets/images/g6.jpg",
    "../../../assets/images/g6.jpg", "../../../assets/images/g6.jpg","../../../assets/images/g6.jpg"]
  
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 3000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false; 
  }

  ngOnInit(): void {
  }


}
