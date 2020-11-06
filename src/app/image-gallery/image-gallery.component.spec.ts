import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserModule } from '@angular/platform-browser';

import { GalleryComponent } from './image-gallery.component';
import { ImageService } from '../image.service';
import { FilterimagesPipe } from '../filterimages.pipe';

describe('GalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ],
      declarations: [
        GalleryComponent,
        FilterimagesPipe
      ],
      providers: [
        ImageService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the GalleryComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should start with images at empty' , () => {
    expect(component.images.length).toBe(0);
  });

  it(`should start with filterBy at 'all' value` , () => {
    expect(component.filterBy).toEqual('all');
  });

  it('should start with allImages at empty' , () => {
    expect(component.allImages.length).toBe(5);
  });

});
