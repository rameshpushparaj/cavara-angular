import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	    $(document).on("click", '[data-toggle="lightbox"]', function(event) {
           event.preventDefault();
          // $(this).ekkoLightbox();
      });

  }

}
