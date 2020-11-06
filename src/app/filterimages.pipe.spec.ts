import { FilterimagesPipe } from './filterimages.pipe';

import { images } from './utils/constants';

const getItemsByBrand = (brand) => images.filter(image => image.brand === brand);

describe('FilterimagesPipe', () => {
  let pipe: FilterimagesPipe;

  beforeEach(() => {
    pipe = new FilterimagesPipe();
  });

  it('should create an instance of FilterimagesPipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return all images', () => {
    expect(pipe.transform(images, 'all')).toEqual(images);
  });

  it(`should return the images with brand 'perro'`, () => {
    expect(pipe.transform(images, 'perro')).toEqual(getItemsByBrand('perro'));
  });

  it(`should return the images with brand 'gato'`, () => {
    expect(pipe.transform(images, 'gato')).toEqual(getItemsByBrand('gato'));
  });

});
