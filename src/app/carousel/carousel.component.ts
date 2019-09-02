import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	  // Configure Slider
      $(".carousel").carousel({
        interval: 2000,
        pause: "hover"
      });

  }

}
