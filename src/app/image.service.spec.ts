import { ImageService } from './image.service';

describe('ImageService', () => {
  let imageService: ImageService;

  beforeEach(() => {
    imageService = new ImageService();
  });

  it('should create an instance of ImageService', () => {
    expect(imageService).toBeTruthy();
  });

  it('should return all images', () => {
    expect(imageService.getImages().length).toEqual(5);
  });

  it('should return the image if the id exists', () => {
    expect(imageService.getImage(1)?.brand).toEqual('perro');
  });

  it(`should return undefined if the id don't exists`, () => {
    expect(imageService.getImage(100)?.brand).toEqual(undefined);
  });
});
