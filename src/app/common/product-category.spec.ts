import { ProductCategory } from './product-category'; // READ!

describe('ProductCategory', () => {
  it('should create an instance', () => {
    expect(new ProductCategory(1, 'Test')).toBeTruthy();
  });
});
