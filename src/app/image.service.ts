import { Injectable } from '@angular/core';

import { images } from './utils/constants';

@Injectable()
export class ImageService {
    allImages = [];

    getImages() {
        return this.allImages = images.slice(0);
    }

    getImage(id: number) {
        return images.slice(0).find(Images => Images.id == id)
    }
}
