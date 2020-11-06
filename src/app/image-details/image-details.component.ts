import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ImageService } from '../image.service';

@Component({
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css']
})
export class ImageDetailComponent {
  image: any = null;

  constructor(private imageService: ImageService,
    private route: ActivatedRoute) { }

  ngOnInit(){
    this.image = this.imageService.getImage(this.route.snapshot.params['id'])
  }
}
