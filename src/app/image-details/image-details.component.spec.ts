import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { ImageDetailComponent } from './image-details.component';
import { ImageService } from '../image.service';
import { FilterimagesPipe } from '../filterimages.pipe';
import { images } from '../utils/constants';

let imageServiceStub: Partial<ImageService>;

const getImage = (id: number) => {
  return images.find(item => item.id === id);
}

const INITIAL_ID = 1;

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  let imageService: ImageService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async(() => {

    imageServiceStub = {
      getImage
    }

    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule,
      ],
      declarations: [
        ImageDetailComponent,
        FilterimagesPipe
      ],
      providers: [
        {
          provide: ImageService,
          useValue: imageServiceStub
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: INITIAL_ID }
            }
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create the ImageDetailsComponent', () => {
    expect(component).toBeTruthy();
  });

  it(`should start with image at ${JSON.stringify(getImage(INITIAL_ID))}` , () => {
    expect(component.image).toEqual(getImage(INITIAL_ID));
  });

  it(`should get ${JSON.stringify(getImage(2))}`, () => {
    activatedRoute.snapshot.params.id = 2;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.image).toEqual(getImage(2));
  });

});
