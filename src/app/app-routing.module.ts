import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GalleryComponent } from './image-gallery/image-gallery.component';
import { ImageDetailComponent } from './image-details/image-details.component';
import { ImageService } from './image.service';

const routes: Routes = [
  { path: '', component: GalleryComponent },
  { path: 'image/:id', component: ImageDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ImageService],
})
export class AppRoutingModule { }
